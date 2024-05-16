import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const OrderTable = ({ parts }: any) => {
  const prices = parts.map((item: any) => item.price);
  const total = prices.reduce((acc: number, curr: number) => acc + curr);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {/*<TableHead className="w-[100px]">Díl</TableHead>*/}
          <TableHead>ID</TableHead>
          <TableHead>Díl</TableHead>
          <TableHead>Barva</TableHead>
          <TableHead>Kolekce</TableHead>
          <TableHead>Cena</TableHead>
          <TableHead>Sklad</TableHead>
          <TableHead className="text-right ">Cena</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {parts.map((item: any) => (
          <TableRow key={item.id}>
            <TableCell className="max-h-[50px] block overflow-auto">
              {item.id}
            </TableCell>
            <TableCell className="font-medium">{item?.parts?.title}</TableCell>
            <TableCell>{item?.color}</TableCell>
            <TableCell>{item?.collection?.title}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.stock}</TableCell>
            <TableCell className="text-right">{item.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={6}>Celkově</TableCell>
          <TableCell className="text-right">{total} Kč</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
