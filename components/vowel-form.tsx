"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React, { Dispatch, SetStateAction } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  text: z
    .string()
    .min(3, "Ingresa al menos 3 letras")
    .refine(
      (value) => /[aeiou]/i.test(value),
      "La frase debe contener al menos una vocal",
    ),
});

type VowelFormProps = {
  setResult: Dispatch<SetStateAction<string>>;
};

export const VowelForm = ({ setResult }: VowelFormProps) => {
  const {
    formState: { isValid, isSubmitting, dirtyFields, errors },
    control,
    handleSubmit,
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
    mode: "onChange",
  });

  function removeVowels(text: string) {
    return text.replace(/[aeiou]/gi, "");
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = removeVowels(values.text);

    setResult(result);

    reset();
  }

  return (
    <form
      className="flex flex-col w-full gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        control={control}
        name="text"
        render={({ field }) => (
          <Input
            fullWidth
            isClearable
            isRequired
            errorMessage={errors.text?.message}
            isDisabled={isSubmitting}
            isInvalid={!!errors.text && dirtyFields.text}
            label="Frase"
            type="text"
            onClear={() => field.onChange("")}
            {...field}
          />
        )}
      />

      <Button
        className="w-fit"
        color="primary"
        isDisabled={!isValid || isSubmitting}
        type="submit"
      >
        Enviar
      </Button>
    </form>
  );
};
