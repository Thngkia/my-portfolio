import * as React from 'react';
import {SectionHeader} from '../components'
import slidingGame from '../assets/slidingGame.gif'
import heatmap from '../assets/Dengue_heatmap.png'
import projectData from '../data/project.json'
import bulmaWallet from '../assets/bullmaWallet.png'
import barcodeHome from '../assets/barcodeHome.png'

interface props {
    id: string
}


const Card = ({key, image, data}) => {
    console.log(key)
    return (
        <div className="p-4 md:w-1/3" key={key}>
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={image} alt="blog" />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">PROJECT</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{data.name}</h1>
                    <p className="leading-relaxed mb-3">{data.summary}</p>
                    <div className="flex items-center flex-wrap underline">
                       <a href={data.link}>Github Link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Projects = ({ id }: props): React.ReactElement => {
    return (
        <section className="text-gray-600 body-font" id={id}>
            <div className="container px-5 py-24 mx-auto">
            <SectionHeader title={"Projects"}/>
                <div className="flex flex-wrap -m-4 justify-center">
                    <Card key={1} image={slidingGame} data={projectData[0]}/>
                    <Card key={2} image={heatmap} data={projectData[1]}/>
                    <Card key={3} image={bulmaWallet} data={projectData[2]}/>
                    <Card key={3} image={barcodeHome} data={projectData[3]}/>
                </div>
                </div>
        </section>
    );
}