"use client";

import { ReactNode, useEffect, useState } from "react";
import { SWRConfig } from "swr";

type SwrInitiatorProps = {
  children: ReactNode;
};

const SwrInitiator = ({ children }: SwrInitiatorProps) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    setInit(true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return init ? (
    <SWRConfig value={{ shouldRetryOnError: false, revalidateOnFocus: false }}>{children}</SWRConfig>
  ) : null;
};

export default SwrInitiator;
