import ContentCard from "./ContentCard"

const Content = () => {
  const title = "First One! Static"
  const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni amet quisquam ipsum temporibus repudiandae natus quidem, deleniti earum quo sed eveniet?"
  const bgImg = "../../public/one.png"
  const fgImg = "../../public/ring.jpg"

  return (
    <section className="content">
        <ContentCard  title={title} content={content} bgImg={bgImg} fgImg={fgImg} />
        <ContentCard title="Second Post" content={content} bgImg={bgImg} fgImg={fgImg} />
        <ContentCard title="This is IT" content={content} bgImg={bgImg} fgImg={fgImg} />
    </section>
  )
}

export default Content