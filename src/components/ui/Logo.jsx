import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" passHref>
      <a>
        <Image src="../public/logo.png" width={160} height={55} alt="logo" />
      </a>
    </Link>
  );
};

export default Logo;
