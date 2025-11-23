import React from 'react'
import { ShimmerSimpleGallery } from "react-shimmer-effects";

function About() {
    return (
        <>
            <section className="container-fluid m-3">
                <h3>About Page:</h3>

                <p style={{ textAlign: "justify" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquid explicabo impedit placeat rerum facere cum nesciunt id doloribus vero nam facilis praesentium, deserunt eaque harum aspernatur provident illum alias!
                    Est veniam modi, labore laboriosam officiis vel saepe necessitatibus sit magnam amet corrupti nam soluta odio veritatis! Totam animi eaque quidem, rem pariatur natus. Consequuntur, quam quisquam. Sapiente, natus excepturi.
                    Modi cum vero voluptatem eligendi non magni officia fugit, quidem asperiores animi quibusdam praesentium accusantium commodi, optio necessitatibus excepturi ad quos! Obcaecati omnis similique odio corrupti provident! Dolores, labore impedit!
                    Incidunt consequuntur reprehenderit numquam saepe magnam, laudantium laboriosam optio repellendus minima atque corrupti rerum, animi temporibus odit laborum. Nihil cumque debitis ducimus! Adipisci enim nobis tempora optio laborum nesciunt aliquid!
                    Labore placeat, cupiditate similique reiciendis nostrum quibusdam quae magnam amet ipsam possimus hic quos, id laudantium. Nam optio corrupti dignissimos quibusdam eos. Explicabo harum quasi quidem modi ad accusamus quibusdam.
                    Officiis.
                </p>

                <h3>Developers:</h3>
                <ShimmerSimpleGallery className='mt-5' row={3} col={4} imageType="circular" imageHeight={200} caption />




            </section>

        </>
    )
}

export default About