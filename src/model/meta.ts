export const items: string[] = [
	"Catalog",
	"Create"
];


export const dashedCase = (item: string): string => {
	// @ts-ignore
	return item.replaceAll(" ", "-").toLowerCase();
}


export const routes: string[] = [
	...items.map((item) => dashedCase(item)),
]

export const navSize: number = 70;