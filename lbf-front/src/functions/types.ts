
type PageProps = {
  switchTo: (newPage: string) => void;
}

interface FoundFormProps {
  handle: string;
  description: string;
  image: File | null;
  date: Date | null;
}

export type { PageProps, FoundFormProps }