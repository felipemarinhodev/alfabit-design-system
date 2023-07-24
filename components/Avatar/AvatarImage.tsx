import Image from "next/image";

export type AvatarImageProps = {
  src: string;
  altDescription: string | ''
};

const AvatarImage = ({ src, altDescription }: AvatarImageProps) => {
  return (
    <Image
      src={src}
      width={100}
      height={100}
      alt={altDescription}
      className="rounded-full"
    />
  );
}

export default AvatarImage;
