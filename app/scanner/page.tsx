"use client";

import React, { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";

export default function Scan() {
  const [data, setData] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-96">
        <Scanner
          onScan={(result) => setData(result[0].rawValue)}
          formats={[
            "aztec",
            "code_128",
            "code_39",
            "code_93",
            "codabar",
            "databar",
            "databar_expanded",
            "data_matrix",
            "dx_film_edge",
            "ean_13",
            "ean_8",
            "itf",
            "maxi_code",
            "micro_qr_code",
            "pdf417",
            "qr_code",
            "rm_qr_code",
            "upc_a",
            "upc_e",
            "linear_codes",
            "matrix_codes",
            "unknown",
          ]}
          components={{
            onOff: true,
            zoom: true,
            finder: true,
          }}
        />
      </div>
      <p>Scanned Data: {data}</p>
    </main>
  );
}
