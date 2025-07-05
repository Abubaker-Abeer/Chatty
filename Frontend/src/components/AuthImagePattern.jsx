import React from "react";

export default function AuthImagePattern({ title, subtitle }) {
  return (
    <div className="hidden lg:flex items-center justify-center bg-purple-950 p-12 text-purple-100">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl ${
                i % 3 === 0
                  ? "bg-purple-600"
                  : i % 3 === 1
                  ? "bg-purple-500"
                  : "bg-purple-400"
              } ${i % 2 === 0 ? "animate-pulse" : ""}`}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4 text-purple-100">{title}</h2>
        <p className="text-purple-300">{subtitle}</p>
      </div>
    </div>
  );
}
