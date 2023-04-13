
import Image from "next/image"
import Link from "next/link"

export const MenuItem = ({ item }: any) => {
  const { name, description } = item.fields

  return (
    <div className="">
      <p className="name">{name}</p>
      <p>{description}</p>
    </div>
  )
}

const Menu = ({ list, menuList }: any) => {
  const { logo, category } = list.fields

  const menuArr: any = []
  menuList.forEach((item: any, i: number) => {
    if (item.fields.restaurantName == list.fields.restaurantName) {
      menuArr.push(item.fields.meals)
    }
  });

  const categoryArr = ["Starters", "Platters", "Main", "Dessert"]

  return (
    <div className="modal fade fullView menuModal" id="menuModal" tabIndex={-1} aria-labelledby="Reserve Table" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close" ><i className="bi bi-x-lg"></i></button>
            <div className="container">
              <div className="header">
                <div className="logo">
                  <Image
                    alt={`Cover Image for ${list.fields.restaurantName}`}
                    src={'https:' + logo.fields.file.url}
                    width={logo.fields.file.details.image.width}
                    height={logo.fields.file.details.image.height}
                    className="mg-fluid"
                  />

                </div>
                <p className="chef">By Executive Pastry Chef Kimberly Beatrix</p>
              </div>
              <div className="list">
                <div className="row">
                  {categoryArr.map((cat: string, i: number,) => (
                    <div className="col col-md-6" key={i} data-id={cat} >
                      <h3>{cat}</h3>
                      {menuArr[0].map((item: any, i: number) => (
                        (cat == item.fields.category) && <MenuItem item={item} key={i} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Menu