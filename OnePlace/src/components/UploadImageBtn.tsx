import { useState, useRef } from "react";

interface UploadImgProps {
  onImageUploaded?: (imageBase64: string) => void;
  currentImageUrl?: string;
}

function UploadImg({ onImageUploaded, currentImageUrl }: UploadImgProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(currentImageUrl || null);
  const [processing, setProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validar que sea una imagen
    if (!file.type.startsWith("image/")) {
      alert("Por favor selecciona un archivo de imagen válido.");
      return;
    }

    // Validar tamaño (máximo 2MB para base64, ya que aumenta el tamaño)
    if (file.size > 2 * 1024 * 1024) {
      alert("La imagen es demasiado grande. Por favor selecciona una imagen menor a 2MB.");
      return;
    }

    setProcessing(true);

    // Convertir la imagen a base64
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setImagePreview(base64String);
      
      if (onImageUploaded) {
        onImageUploaded(base64String);
      }
      
      setProcessing(false);
    };
    
    reader.onerror = () => {
      alert("Error al procesar la imagen. Por favor intenta con otra imagen.");
      setProcessing(false);
    };
    
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
      
      {imagePreview ? (
        <div className="w-full h-full relative">
          <img
            src={imagePreview}
            alt="Preview"
            className="w-full h-full object-cover rounded-2xl"
          />
          <button
            onClick={handleClick}
            disabled={processing}
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300 disabled:opacity-50"
          >
            {processing ? "Procesando..." : "Cambiar imagen"}
          </button>
        </div>
      ) : (
        <button
          onClick={handleClick}
          disabled={processing}
          className="w-full h-full bg-gray-300 text-black font-semibold py-3 rounded-md hover:bg-gray-400 transition-colors duration-300 disabled:opacity-50 flex items-center justify-center"
        >
          {processing ? "Procesando..." : "Upload Image"}
        </button>
      )}
    </div>
  );
}

export default UploadImg;