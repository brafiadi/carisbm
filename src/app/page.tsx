import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/ui/sidebar";
import Image from "next/image";
import { useEffect } from "react";
import DataTable from "./data-table";

export default function Home() {
	// console.log(data);

	return (
		<div className="pb-16">
			<DataTable />
		</div>
	);
}
