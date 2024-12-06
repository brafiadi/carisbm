import { capitalizeWords } from "@/utils/capitalizeWords";

interface PageProps {
	params: {
		kategori: string;
	};
}

export default function Page() {
	// const title = capitalizeWords(params.kategori);
	return (
		<div className="text-xl text-gray-600 text-transform: uppercase">
			coming soon
		</div>
	);
}
