import React from 'react'
import { ShimmerCategoryList } from "react-shimmer-effects";

function Contact() {
    return (
        <>
            <section className="container-fluid m-3">
                <h3>Contact Page:</h3>
                <p style={{ textAlign: "justify" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, porro omnis. Soluta facere quasi harum excepturi fuga dolor et eligendi, veritatis nisi reprehenderit ipsam ullam error voluptas quidem itaque non.
                    Expedita eos culpa, praesentium facilis sit corrupti, eveniet aliquam est alias ea aspernatur recusandae natus commodi vel quia autem dignissimos debitis assumenda similique accusantium cumque temporibus eum omnis. Nemo, molestiae!
                    Dicta commodi voluptatibus maxime itaque sequi. Est, aliquid, eum odio perspiciatis dolorem iste autem a quasi ullam unde nihil! Quia, doloremque! Rem laboriosam earum voluptatum culpa odit distinctio consequuntur quibusdam?
                    Deleniti nostrum laborum enim vero sunt odio libero minus earum voluptatem repellendus reprehenderit quasi veniam similique vel quis error, adipisci iure natus accusamus vitae dolorem dolores itaque? Officiis, commodi itaque?
                    Autem enim quisquam asperiores eaque expedita beatae vitae nemo cupiditate. Voluptatum accusantium fugiat explicabo eaque sapiente delectus quo? Omnis aliquam distinctio dolorum molestiae perferendis quam optio. Maiores laboriosam sapiente quis.
                    Earum adipisci aspernatur mollitia odit hic suscipit nihil pariatur itaque doloribus praesentium magnam ea voluptatibus, similique vitae nemo alias eaque temporibus fugit error dolorum aperiam? Repellendus maiores nemo cupiditate voluptas.
                    Doloremque, totam repellat porro laudantium dolor adipisci sed saepe veniam non quia necessitatibus dignissimos temporibus consequatur ratione voluptatum harum corrupti atque. Sunt totam deserunt laboriosam laudantium distinctio reprehenderit dolorum quod.
                </p>

                <h3>Contact us:</h3>
                <ShimmerCategoryList title items={6} categoryStyle="STYLE_SEVEN" />



            </section>
        </>
    )
}

export default Contact