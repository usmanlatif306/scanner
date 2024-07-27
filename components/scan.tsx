"use client";

import React, { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";

export default function Scan() {
  const [data, setData] = useState("");
  return (
    <>
      <div className="w-96">
        <Scanner
          onScan={(result) => console.log(result)}
          formats={["code_128"]}
        />
      </div>
      <p>Scanned Data: {data}</p>
    </>
  );
}
