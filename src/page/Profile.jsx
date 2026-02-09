import profileImg from "../assets/Profile.jpg";
import { Link } from "react-router";
import { CiLogout } from "react-icons/ci";

export default function Profile() {
  const account = JSON.parse(localStorage.getItem("account"));
  return (
    <div className="px-5 py-4 flex flex-col gap-5 h-screen">
      <h1 className="text-3xl font-bold text-blue-400">Profile</h1>
      <div className="flex items-center gap-3">
        <div
          className="w-15 h-15 rounded-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${profileImg})`,
          }}
        ></div>

        <div>
          <h3 className="text-xl font-bold text-blue-400">{account.name}</h3>
          <h5 className="font-bold">FrontEnd Developer</h5>
        </div>
      </div>
      <p className="flex-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi deleniti
        nostrum pariatur earum at ratione ut facilis nobis odit eveniet, quaerat
        neque voluptatem similique nihil assumenda aliquid in ex maxime eaque
        animi veniam unde numquam blanditiis? Perspiciatis blanditiis iusto rem
        commodi cumque dolore quis, provident soluta explicabo incidunt in
        debitis neque cupiditate dolor ipsam quasi modi sapiente, fuga aliquid
        sed nisi quidem reprehenderit, suscipit laboriosam? Esse sit atque
        quibusdam nisi minima distinctio officia cum perferendis enim dicta vero
        odio reiciendis, culpa voluptates eius repudiandae itaque doloremque
        quisquam cupiditate officiis asperiores labore. Magnam pariatur
        accusantium sequi cupiditate, ea perspiciatis voluptas ab repellendus
        in? Temporibus corrupti quas asperiores esse officia debitis quisquam
        nihil reiciendis architecto. Minus expedita atque delectus dolorem
        temporibus quod quasi culpa magnam harum doloremque repellat sapiente
        sit, quia recusandae possimus fugiat vitae asperiores suscipit. Eum
        reprehenderit maiores esse quis aliquid unde debitis nisi nihil, nobis
        beatae optio corporis incidunt, veniam voluptatibus nemo necessitatibus,
        nulla voluptatum itaque iusto a! Vel odio culpa blanditiis assumenda
        fuga ea aut neque quo iste. Culpa nesciunt possimus veniam neque vel
        iste minus sunt voluptate iusto ducimus aspernatur labore illum optio
        totam rem laborum ipsum quia nobis perferendis voluptatum at molestiae,
        voluptatem sit eveniet. Nisi recusandae delectus optio impedit nostrum
        eius ullam alias animi, itaque nam voluptatem, totam mollitia
        dignissimos in eos ipsam perferendis. Debitis nobis tempore,
        voluptatibus ullam fugiat consectetur enim totam. Ea, maiores illo ut
        placeat quasi exercitationem, quibusdam sunt fugiat a itaque dolores
        quaerat? Voluptatem eum velit recusandae suscipit rerum minus inventore
        libero veniam, aut, quasi omnis, labore perspiciatis. Minima quam autem
        aut facilis, minus non soluta eius vero repellendus veritatis totam
        numquam ducimus. Velit esse aliquid expedita ad? Consequuntur,
        asperiores obcaecati id vitae cumque odio. Deleniti magni reiciendis,
        repellendus illo facere cum quisquam ullam delectus eaque, perspiciatis
        expedita dolor voluptatum placeat?
      </p>
      <div className="inline-flex">
        <Link
          onClick={() => localStorage.setItem("isLogin", "false")}
          to="/"
          className="flex items-center gap-2 bg-red-400 text-white p-2 rounded"
        >
          <CiLogout className="fill-white w-5 h-5" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}
