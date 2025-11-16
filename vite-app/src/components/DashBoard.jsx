import React, { useContext } from 'react'
import themeContext from './CreateTheme';

function DashBoard() {

    let {isDark,handleTheme}=useContext(themeContext);

  return (
    <>
    <div className={`w-50 mt-5 border border-3 shadow m-auto rounded ${isDark?"text-white bg-dark":"bg-light"}`}>
        <p className="p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic natus porro vitae aut ullam explicabo maiores laboriosam sed a odio? Est, perspiciatis cum commodi modi quibusdam qui nesciunt ipsa ratione?
            Ad molestias cumque, quaerat atque voluptates molestiae assumenda rerum dolores adipisci, sunt accusantium. Nemo tempora, at pariatur fugit neque deserunt libero ratione architecto magni eum. Ullam porro rerum iure sit.
            Ab, in earum quia sequi, cupiditate ratione iusto obcaecati cumque provident odio magnam. Iure delectus reiciendis saepe libero sequi, placeat dolorum voluptatum inventore ex necessitatibus deleniti optio beatae nostrum explicabo.
            Dolor possimus illo voluptate quaerat delectus error in laborum dignissimos. Quidem, illum delectus doloribus itaque porro laudantium, ex sapiente eius earum iusto distinctio explicabo voluptates beatae est repellendus assumenda. Est.
            Consequuntur quisquam recusandae vero a corporis deserunt unde nesciunt, iure animi eaque dolore ad incidunt placeat repudiandae laudantium modi reiciendis itaque laboriosam enim optio voluptatum! Sint itaque fugit aperiam incidunt.
        </p>
        <button className="btn btn-primary m-5" onClick={handleTheme}>Change theme</button>
    </div>
    </>
  )
}

export default DashBoard