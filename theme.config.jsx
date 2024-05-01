export default {
    logo: <b><span>BuildinBlog</span></b>,
    project: {
      link: 'https://github.com/aumvats/buildinblog'
    },
    docsRepositoryBase: 'https://github.com/aumvats/buildinblog/tree/main/pages', 

    footer: {               //footer content
      text: (
        <span>
          
          <a href="https://github.com/aumvats/buildinblog" target="new-tab">
          BuildinBlog 
          </a> 
          {" "}@ {new Date().getFullYear()} .
        </span>
      )
    },
    sidebar: {
      toggleButton: 'true'
    },
    toc: {
      backToTop: 'true'
    },
    sidebar: {
      titleComponent({ title, type }) {
        if (type === 'separator') {
          return (
            <div style={{ background: 'blue', textAlign: 'center' }}>{title}</div>
          )
        }
        if (title === 'About') {
          return <>{title}</>
        }
        return <>{title}</>
      }
    }
  }