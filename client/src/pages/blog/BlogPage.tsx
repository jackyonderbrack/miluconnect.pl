import Header from "../../components/Header/Header"
import Layout from "../../components/Layout/Layout"
import MetaTags from "../../components/MetaTags/MetaTags"
import HeaderImg from "../../assets/miluconnect-blog-ecommerce-image-1.png"
import './BlogPage.css'

const BlogPage = () => {
  return (
    <div id='Blog'>
        <MetaTags
            title='MILU Connect - Szybka i darmowa wycena'
            description='Tworzenie stron internetowych, sklepów online i usługi IT. Skontaktuj się z nami, aby uzyskać dedykowane rozwiązania dla Twojego biznesu.'
		/>
        <Header
            content={
                <div>
                    <h1>
                        Przeczytaj <span className='text-gradient'>o nowościach</span><br />
                        ze świata e-commerce
                    </h1>
                </div>
            }
            imgUrl={HeaderImg}
            align='start'
        />
        <Layout variants="sidenavRight"> 
			
            <div className="blog_sidenav">
                {/* Jakiś content dla bloga */}
                <h1>Blog Content</h1>
                <p>Example content here...</p>
            </div>
            <div className="blog_cards">
                
            </div>

        </Layout>
    </div>
  )
}

export default BlogPage