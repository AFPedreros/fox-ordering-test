"use client";

import { CheckboxProps, useCheckbox } from "@nextui-org/checkbox";
import { Chip } from "@nextui-org/chip";
import { cn } from "@nextui-org/theme";
import { VisuallyHidden } from "@react-aria/visually-hidden";

import { CheckIcon } from "./icons";

export const CustomCheckbox = (props: CheckboxProps) => {
  const {
    children,
    isSelected,
    isFocusVisible,
    getBaseProps,
    getLabelProps,
    getInputProps,
  } = useCheckbox({
    ...props,
  });

  return (
    <label {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Chip
        ref={getLabelProps().ref as React.RefObject<HTMLDivElement> | undefined}
        classNames={{
          base: cn({
            "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background":
              isFocusVisible,
            "bg-primary": isSelected,
          }),
          content: cn("!text-small text-default-400", {
            "text-primary-foreground pr-1": isSelected,
          }),
        }}
        size="sm"
        startContent={isSelected ? <CheckIcon className="ml-1" /> : null}
        variant="faded"
        onClick={getLabelProps().onClick}
      >
        {children ? children : isSelected ? "Enabled" : "Disabled"}
      </Chip>
    </label>
  );
};
