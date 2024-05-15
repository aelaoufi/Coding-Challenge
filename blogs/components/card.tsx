import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import Link from "next/link"
import { SVGProps } from "react"

export default function MyCard() {
  return (
    <Card className="relative w-full max-w-4xl rounded-lg shadow-md hover:shadow-lg transition-shadow">
		<Link
            className="absolute  m-[22px] w-10 h-10 right-0 rounded-md bg-red-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-red-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
			<DeleteIcon className="absolute right-[9.3px] top-[9.3px]"/>
        </Link>
		  <Link
            className="absolute  m-[22px]  w-10 h-10 right-[3.5rem] rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            <EditIcon className="absolute right-2"/>
          </Link>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">The Importance of Mindfulness</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-4">
        <p className="text-gray-500 dark:text-gray-400">
          In today's fast-paced world, it's easy to get caught up in the hustle and bustle of daily life. However,
          taking the time to practice mindfulness can have a profound impact on our overall well-being. Mindfulness is
          the art of being present in the moment, without judgment or distraction.
        </p>
      </CardContent>
    </Card>
  )
}

function DeleteIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.5"
		strokeLinecap="round"
		strokeLinejoin="round"
		>
		<path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z"></path>
    </svg>
  )

}

function EditIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256" > <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(8,8)"><path d="M23.90625,3.96875c-1.04687,0 -2.09375,0.40625 -2.90625,1.21875l-15.8125,15.8125l-0.0625,0.3125l-1.09375,5.5l-0.3125,1.46875l1.46875,-0.3125l5.5,-1.09375l0.3125,-0.0625l15.8125,-15.8125c1.625,-1.625 1.625,-4.1875 0,-5.8125c-0.8125,-0.8125 -1.85937,-1.21875 -2.90625,-1.21875zM23.90625,5.875c0.50391,0 1.01172,0.23047 1.5,0.71875c0.97266,0.97266 0.97266,2.02734 0,3l-0.71875,0.6875l-2.96875,-2.96875l0.6875,-0.71875c0.48828,-0.48828 0.99609,-0.71875 1.5,-0.71875zM20.3125,8.71875l2.96875,2.96875l-12.09375,12.09375c-0.65625,-1.28125 -1.6875,-2.3125 -2.96875,-2.96875zM6.9375,22.4375c1.19922,0.48438 2.14063,1.42578 2.625,2.625l-3.28125,0.65625z"></path></g></g> </svg>	
	)

}