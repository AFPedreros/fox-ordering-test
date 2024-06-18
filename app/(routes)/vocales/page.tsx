"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import React from "react";

import { title } from "@/components/primitives";
import { VowelForm } from "@/components/vowel-form";

export default function VowelPage() {
  const [result, setResult] = React.useState("");

  return (
    <Card className="max-w-xl">
      <CardHeader className="flex-col items-start gap-1 p-6 text-left">
        <h1 className={title({ size: "sm" })}>Quita las vocales</h1>
        <p className="font-normal text-small text-default-500">
          Ingresa cualquier frase.
        </p>
      </CardHeader>

      <Divider />

      <CardBody className="p-6">
        <VowelForm setResult={setResult} />
      </CardBody>

      <Divider />

      <CardFooter className="p-6">
        <p>
          <span className="font-bold">Resultado</span>: {result}
        </p>
      </CardFooter>
    </Card>
  );
}
