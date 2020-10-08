import React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";

interface ColumnProps {
  text: string
}

export const Column = () => {
  return (
    <ColumnContainer>
      <ColumnTitle>
        <div>Column Title</div>
      </ColumnTitle>
    </ColumnContainer>
  )
}
