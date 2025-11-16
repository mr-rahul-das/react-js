import React from 'react'

function Home({ children }) {
    return (
        <>
            <div className="container-fluid p-3">
                <h3>Home Page:</h3>
                <p style={{ textAlign: "justify" }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ipsum, earum in quibusdam quisquam cumque voluptate aliquam modi tenetur assumenda, enim velit quos odio id voluptates perferendis? Aut, aspernatur cupiditate.
                    Minus, repudiandae velit ab nam corporis commodi perspiciatis libero dolor quidem non. Dolorem laudantium a voluptas! Cumque in, expedita sequi autem dolore vero voluptate fuga ducimus commodi earum libero ex.
                    Alias ex animi fugit eligendi aut provident. Odit illum excepturi voluptatibus mollitia molestiae velit distinctio, molestias pariatur, iusto deserunt hic consequatur. Quidem possimus itaque inventore impedit enim ratione at libero!
                    Dolorem reprehenderit delectus doloribus aliquid enim? Consequuntur fugiat voluptatum nemo a sequi architecto, maiores sint iste repudiandae dolore magnam laudantium facere exercitationem minus animi inventore laborum sapiente? Dolor, eum at?
                    Rem alias commodi tempore expedita deserunt, a ut in blanditiis odit architecto perferendis veritatis, rerum aspernatur illum molestiae et natus ratione dolor consequuntur est earum laudantium unde. Quas, nesciunt deserunt!
                    Recusandae dolore velit eveniet culpa omnis sit unde corporis reiciendis sint, cum quae nam voluptas! Eveniet culpa commodi aliquid, consectetur debitis quasi vel odio assumenda fugiat tempore esse ducimus numquam?
                </p>
            </div>

            {
                children
            }
            
        </>
    )
}

export default Home;