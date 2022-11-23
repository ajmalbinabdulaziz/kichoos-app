import Head from 'next/head'
import Image from 'next/image'
import Contact from '../components/Contact'
import GalleryBox from '../components/GalleryBox'


const about = () => {
  return (

    <main className='flex flex-col'>

      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='mx-32 mt-10 font-exo'>
        <h1 className='text-6xl font-bold mb-6'>About</h1>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 font-roboto leading-loose tracking-wide'>

          <section className='px-2 lg:px-24 my-2 col-span-2 mb-20'>
              <div className="float-left relative m-5 mx-7 w-52 h-64 md:w-80 md:h-96">
                  <Image src="/about.jpg" layout='fill' />
              </div>

              <div className='m-3'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sit explicabo, quae excepturi cumque ea saepe perferendis voluptates dicta culpa doloribus, maiores ad. Dolorum tenetur nulla et repudiandae facere tempore, nisi voluptatem quas, reiciendis mollitia magnam! Recusandae, itaque! Nostrum magnam animi velit officiis et. Cum alias minima fugiat assumenda id qui obcaecati a? Aspernatur rem consectetur neque doloremque a amet fuga accusamus veniam repellat odit quam aliquid, quibusdam dolorem impedit corporis illo accusantium. Nostrum totam praesentium, fugit sequi mollitia aliquid quis suscipit! Magnam consequatur doloribus quisquam perferendis aliquid, mollitia rem, ea iste unde quia, explicabo optio delectus voluptatum! Mollitia suscipit deserunt delectus! Dolore quisquam vel porro! Blanditiis consequatur voluptatem deleniti nesciunt rem voluptatibus deserunt? Natus repellat voluptatum obcaecati corrupti placeat nihil, atque error commodi totam, doloremque impedit unde perspiciatis est. Voluptatibus corporis vitae aperiam, quo doloremque magni? Ducimus officia unde animi, odit in cumque, laborum quidem adipisci obcaecati nostrum expedita dolores, incidunt et dolore id facere! Nisi sed in sapiente id? Ipsum odio pariatur non similique officiis earum! Iste aut, numquam repellat ipsam quisquam exercitationem sapiente accusamus incidunt tempora labore aperiam cum cumque nihil molestias quibusdam maiores temporibus suscipit minus! Dignissimos doloribus vitae necessitatibus voluptate modi fugit! Cumque sed culpa provident laudantium sunt. Id illo reprehenderit sint itaque asperiores, accusamus repudiandae doloremque! Ex, id explicabo temporibus, in hic quibusdam exercitationem a, ea facere sed architecto nobis odio recusandae. Tenetur eligendi, architecto enim possimus fuga quaerat sequi odio esse nesciunt ducimus obcaecati, praesentium rerum corporis soluta quae quibusdam quam minima neque. Illum quam ad quasi eligendi dolorum, facere, quas doloribus iure, quia corrupti obcaecati accusantium quod? Corrupti, provident repudiandae excepturi hic quaerat fuga quidem consectetur, nobis eum iure perferendis maiores sequi consequuntur voluptates repellat repellendus rem temporibus aspernatur ducimus tenetur suscipit vel ipsum? Ut in est magni expedita adipisci exercitationem numquam autem doloribus vel odio illo accusantium voluptas quo minus, dignissimos harum id beatae aperiam nulla. Pariatur maxime aut neque quidem explicabo odio perspiciatis assumenda, nobis doloribus vel commodi, amet voluptatum dolorem totam facere, incidunt animi saepe voluptatibus ducimus doloremque quam quaerat tempore natus autem. Rem officia ipsam voluptas, facere eos dolorem? Nemo sunt voluptatum sit quaerat numquam minima beatae saepe cumque laudantium nulla dolor, maxime vitae illo ex repudiandae necessitatibus facere sed, nesciunt, rem officia molestiae vero. Veniam mollitia eligendi, placeat eaque asperiores molestiae fugiat cupiditate ex repellendus quaerat quasi voluptatum saepe beatae magnam laboriosam consequuntur? Doloremque nesciunt ex rerum dolor cum autem. Possimus porro esse natus! Rem distinctio id molestias architecto atque veritatis quod voluptatum pariatur tenetur, fugiat magni odit, mollitia dicta quis eligendi numquam exercitationem suscipit veniam perspiciatis laborum sunt? Ea, recusandae inventore odio exercitationem reprehenderit illo dolorum iste porro dolor culpa nemo tempore quas tempora. Ullam fugit doloribus nobis architecto dignissimos autem, sed consequuntur repellendus. Possimus facilis, quos temporibus laudantium quod, sapiente voluptatem corporis officiis, impedit cumque veniam repellat suscipit! Sapiente obcaecati facilis earum nobis suscipit maxime eius est excepturi delectus natus pariatur, provident saepe accusantium quam similique temporibus. Nulla laudantium accusamus nihil, modi velit iste enim.</p>
              </div>
          </section>

          <section className='px-5 lg:p-10 mb-20 border-l-2 border-gray-100 '>
              <GalleryBox />
              <Contact />
          </section>

      </div>

    </main>
  )
}

export default about