import React, { SVGProps } from 'react'
import Link from 'next/link'
import MyDialog from './dialog'


function Navbar() {
	return (
		<header className="flex h-20 w-full items-center justify-between px-4 md:px-6">
		  <Link className="flex items-center gap-2" href="#">
			<MountainIcon className="h-6 w-6" />
			<span className="font-semibold">Blogs</span>
		  </Link>
		  <div className="relative">
			<MyDialog/>
		  </div>
		</header>
	  )
}

function DeleteIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="14"
		height="14"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		>
		<path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z"></path>
    </svg>
  )
}

function MountainIcon(props: SVGProps<SVGSVGElement>) {
	return (
<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" />
      <path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="6.5" cy="9.5" r=".5" fill="currentColor" />
    </svg>
  )
}


function PlusIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		>
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}

export default Navbar;