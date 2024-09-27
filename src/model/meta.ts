export const productItems: string[] = [
	"Catalog",
	"Create"
];

export const companyItems: string[] = [
	// "Docs",
	// "Company"
];



export const dashedCase = (item: string): string => {
	// @ts-ignore
	return item.replaceAll(" ", "-").toLowerCase();
}



export const routes: string[] = [
	...productItems.map((item) => dashedCase(item)),
	...companyItems.map((item) => dashedCase(item)),
]

export const navSize: string = 70;