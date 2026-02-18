import React from "react";

export default function Gallery() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Banner */}
      <div className="w-full h-48 bg-red-700 flex items-center justify-center text-white text-3xl font-bold mb-12">
        Video Gallery
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example: Local video (place file in /public/videos/) */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <video
            controls
            className="w-full h-64 object-cover"
            src="./videos/funeral.mp4"
          ></video>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-red-700">
              Funeral Service
            </h3>
            <p className="text-gray-600 text-sm">
              Highlights from a recent service.
            </p>
          </div>
        </div>

        {/* Example: YouTube embed */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <iframe
            className="w-full h-64"
            src="./videos/vclass.mp4"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-red-700">
              Memorial Tribute
            </h3>
            <p className="text-gray-600 text-sm">A touching tribute video.</p>
          </div>
        </div>

        {/* Example: Vimeo embed */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <iframe
            className="w-full h-64"
            src="./videos/convoy.mp4"
            title="Vimeo video"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-red-700">
              Celebration of Life
            </h3>
            <p className="text-gray-600 text-sm">
              Captured moments of remembrance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
