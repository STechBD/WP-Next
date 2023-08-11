import Image from 'next/image'


/**
 * Hero section with responsive image.
 * @return { JSX.Element }
 * @since 1.0.0
 */
export default function Hero(): JSX.Element {
	return (
		<section className="bg-gray-800 text-white">
			<div className="container h-screen mx-auto flex flex-col md:flex-row items-center mb-12 md:mb-24">
				<div className="flex flex-col w-full lg:w-1/2 justify-center items-start p-8">
					<h1 className="text-3xl md:text-5xl p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, voluptatibus?</h1>
					<p className="text-xl md:text-2xl p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam
						voluptatibus, voluptas, quibusdam, voluptates similique dolorum doloremque fugit quae
						asperiores quisquam, voluptatibus, voluptas, quibusdam, voluptates similique dolorum
						doloremque fugit quae asperiores.</p>
					<button
						className="bg-blue-500 text-white font-bold px-8 py-4 rounded-full mt-8 hover:bg-blue-200 hover:text-gray-800">Learn
						More
					</button>
				</div>
				<div className="w-full lg:w-1/2">
					<Image
						src="/next.svg"
						alt="Picture of the author"
						width={ 500 }
						height={ 500 }
						loading={ "lazy" }
					/>
				</div>
			</div>
		</section>
	);
}