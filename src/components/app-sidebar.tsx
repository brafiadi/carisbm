import { GalleryVerticalEnd, Search } from "lucide-react";
import type * as React from "react";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { selectedYear } from "@/lib/global-state";
import { useAtomValue } from "jotai";
import Link from "next/link";
import { VersionSwitcher } from "./version-swithcer";

// This is sample data.
const data = {
	versions: ["2025"],
	navMain: [
		{
			title: "Beranda",
			url: "/",
			isActive: true,
		},
		{
			title: "Honorarium",
			url: "honorarium",
			items: [
				{
					title: "Penanggung Jawab Pengelola Keuangan",
					url: "#",
				},
				{
					title: "Pengadaan Barang/Jasa",
					url: "#",
				},
			],
		},
		{
			title: "Perjalanan Dinas",
			url: "perjalanan-dinas",
			items: [
				{
					title: "Uang Harian Dalam Negeri",
					url: "#",
				},
				{
					title: "Uang Harian Luar Negeri",
					url: "#",
				},
				{
					title: "Penginapan Dalam Negeri",
					url: "#",
				},
			],
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	// const year = useAtomValue(selectedYear)
	const year = 2025;
	return (
		<Sidebar variant="floating" {...props}>
			<SidebarHeader>
				<VersionSwitcher
					versions={data.versions}
					defaultVersion={data.versions[0]}
				/>
				{/* <SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<a href="#">
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
									<Search className="size-4" />
								</div>
								<div className="flex flex-col gap-0.5 leading-none">
									<span className="font-semibold">Cari SBM</span>
									<span className="">{year}</span>
								</div>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu> */}
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu className="gap-2">
						{data.navMain.map((item) => (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton asChild>
									<Link href={item.url} className="font-medium">
										{item.title}
									</Link>
								</SidebarMenuButton>
								{item.items?.length ? (
									<SidebarMenuSub className="ml-0 border-l-0 px-1.5">
										{item.items.map((item) => (
											<SidebarMenuSubItem key={item.title}>
												<SidebarMenuSubButton
													asChild
													// isActive={item.isActive}
												>
													<Link href={item.url}>{item.title}</Link>
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										))}
									</SidebarMenuSub>
								) : null}
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
