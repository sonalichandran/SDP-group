import React, { useState } from 'react'
import { BellRing, Check, Edit, Plus, TrashIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

const AdminProduct = () => {
  const [open, setOpen] = useState(false)
  const products = [
    {
        Image:"https://5.imimg.com/data5/SELLER/Default/2022/10/JY/SK/TN/161422039/fresh-carrots-fresh-red-carrot-for-sale-1513637912-3529401.jpeg",
      ProductId: "prod001",
      Productname: "Carrot",
      Category: "Vegetables",
      Price: "Rs.50",
      Vendor: "XXX",
    },
    {
        Image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mangos_-_single_and_halved.jpg/640px-Mangos_-_single_and_halved.jpg",
      ProductId: "prod002",
      Productname: "Mango",
      Category: "Fruits",
      Price: "Rs.150",
      Vendor: "YYY",
    },
    {
        Image:"https://png.pngtree.com/thumb_back/fh260/background/20220314/pngtree-delicious-food-chicken-breast-meat-vegetables-raw-meat-image_1013285.jpg",
      ProductId: "prod003",
      Productname: "Chicken",
      Category: "Fresh Meat",
      Price: "Rs.500",
      Vendor: "ZZZ",
    },
    {
        Image:"https://rukminim2.flixcart.com/image/850/1000/xif0q/cookie-biscuit/n/q/g/301-dark-fantasy-choco-fills-1-sunfeast-original-imagybg3wvv7gwff.jpeg?q=90&crop=false",
      ProductId: "prod004",
      Productname: "Dark Fantasy",
      Category: "Snacks",
      Price: "Rs.70",
      Vendor: "MMM",
    },
  ]

  return (
    <div className='m-1 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Products</CardTitle>
          <Button onClick={() => setOpen(!open)}>
            <Plus className='h-10 w-10 mr-2' /> Add
          </Button>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Card key={product.ProductId} className="relative">
              <CardHeader>
                <div className="flex flex-row">

                <CardTitle>{product.Productname}

                </CardTitle>
                <div className="flex flex-row pl-32 gap-2" >

                <Edit className='h-6 w-6 text-blue-500 cursor-pointer hover:text-blue-700 ' />
                <TrashIcon className='h-6 w-6 text-red-500 cursor-pointer hover:text-red-700 ' />
                </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* <img src="" className="h-20 w-20"></img> */}
                {product.Image && <img src={product.Image} alt={product.Productname} className="h-20 w-20 mb-2" />}
                <p><strong>Category:</strong> {product.Category}</p>
                <p><strong>Price:</strong> {product.Price}</p>
                <p><strong>Vendor:</strong> {product.Vendor}</p>
              </CardContent>
             
            </Card>
          ))}
        </CardContent>
      </Card>

      <Sheet open={open}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add Product</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="name" className="text-right">
                Product Name
              </Label>
              <Input id="name" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="name" className="text-right">
                Product Image
              </Label>
              <Input id="name" type="file" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Input id="category" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input id="price" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="vendor" className="text-right">
                Vendor
              </Label>
              <Input id="vendor" className="col-span-3" />
            </div>
          </div>
          <SheetFooter className='flex justify-between'>
            <Button className='bg-red-400 hover:bg-red-500' onClick={() => setOpen(!open)}>Cancel</Button>
            <Button type="submit">Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default AdminProduct