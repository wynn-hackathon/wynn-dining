
import Image from "next/image"

export const MenuItem = ({ item }: any) => {
  const { name, description } = item.fields
  return (
    <div className="">
      <p className="name">{name}</p>
      <p>{description}</p>
    </div>
  )
}

const Menu = ({ name, menuList }: any) => {
  const menuArr: any = []
  const url: any = []
  menuList.forEach((item: any, i: number) => {
    if (item.fields.restaurantName == name) {
      menuArr.push(item.fields.meals);
      url.push(item.fields.logo.fields.file)
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
                  {url && <Image
                    alt={`Cover Image for ${name}`}
                    src={'https:' + url[0].url}
                    width={url[0].details.image.width}
                    height={url[0].details.image.height}
                    className="mg-fluid"
                  />
                  }

                </div>
                <p className="chef">By Executive Pastry Chef Kimberly Beatrix</p>
              </div>
              <div className="list">
                <div className="row row-cols-1 row-cols-md-2">
                  {categoryArr.map((cat: string, i: number,) => (
                    <div className="col" key={i} data-id={cat} >
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