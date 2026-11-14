import { useState, useEffect } from "react";

export default function Portrait({
  src = "",
  alt = "Portrait of Suman",
  allowUpload = false,
  className = "",
}) {
  const [preview, setPreview] = useState(src);

  useEffect(() => setPreview(src), [src]);

  useEffect(() => {
    return () => {
      if (preview?.startsWith("blob:")) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div>
      <div className={`aspect-[5/6] overflow-hidden rounded-3xl  ${className}`}>
        {preview ? (
          <img src={preview} alt={alt} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-white/80">
            No image yet
          </div>
        )}
      </div>

      {allowUpload && (
        <label className="mt-3 inline-block cursor-pointer rounded-full bg-black px-4 py-2 text-sm text-white">
          Upload photo
          <input type="file" accept="image/*" onChange={handleFile} className="hidden" />
        </label>
      )}
    </div>
  );
}