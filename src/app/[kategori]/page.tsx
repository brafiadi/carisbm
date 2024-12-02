import { capitalizeWords } from "@/utils/capitalizeWords";

interface PageProps {
	params: {
		kategori: string;
	};
}

export default function Page({ params }: PageProps) {
	const title = capitalizeWords(params.kategori);
	return <>Kategori: {title}</>;
}
