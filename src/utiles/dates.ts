export const monthsName = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

export const getDaysInMonth = ({
	month,
	year,
}: {
	month: number;
	year: number;
}) => {
	return new Date(year, month, 0).getDate();
};
