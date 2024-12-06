import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const getData = async () => {
	const res = await fetch(
		"https://app.brafiadi.space/api/datasbm/master-data/standar-biaya-masukan",
	);
	const data = await res.json();
	return data.data;
};

interface DaftarSBM {
	id: number;
	judul: string;
	jenis: string;
	link: string;
}

export default async function DataTable() {
	const data = await getData();
	// console.log(data)
	return (
		<Card>
			<CardHeader>
				<CardTitle>Daftar Standar Biaya Masukan</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[30px]">No.</TableHead>
							<TableHead className="max-w-[400px]">Judul</TableHead>
							<TableHead className="w-[200px]">Jenis</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{data?.map((item: DaftarSBM) => (
							<TableRow key={item.id}>
								<TableCell>{item.id}</TableCell>
								<TableCell>
									<Link href={item.link}>{item.judul}</Link>
								</TableCell>
								<TableCell>{item.jenis}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
}
