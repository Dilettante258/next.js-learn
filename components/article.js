
const Article = () => {
  return (
    <section>
      <h2 id="about-me">About Me</h2>

      <p>
        I am a second year student majoring in Data Science at Nanjing
        University of Posts and Telecommunications. And now I.m doing some
        research on offline MBRL under the supervision of Ph. <a
        href="https://shangdongyang.github.io/" target="_blank">Shangdong Yang</a
      >. I regularly write blog on my website <a
        href="https://www.dilettante258.cyou/" target="_blank">dilettante258.cyou</a
      >.
      </p>

      <h2 id="research-interests">Research Interests</h2>

      <ul>
        <li><strong>Reinforcement Learning</strong>: offline MBRL</li>
        <li><strong>Data Mining</strong>: data processing</li>
        <li><strong>Machine Learning</strong>: just for pragmatism</li>
      </ul>

      <h2 id="news">News</h2>

      <ul>
        <li>
          <strong>[Octo. 2023]</strong> Received the Merit Student Honors and
          The Second Prize Scholarship.
        </li>
      </ul>

      <h2 id="educations">Educations</h2>

      <ul>
        <li>
          2022.09 - now, School of Computer Science, Nanjing University of
          Posts and Telecommunications, Nanjing.
        </li>
        <li>2019.09 - 2022.06, Zigui County No.1 Middle School, Yichang.</li>
      </ul>

      <h2 id="project">Toy Project</h2>

      <ul className="list-outside">
        <li>
          <strong><a href="https://github.com/Dilettante258/TiebaCrawler" target="_blank"
          >TiebaCrawler</a
          ></strong
          >(2023.01): A Baidu Tieba crawler that utilizes Flask to achieve
          front-end visualization, crawling user comments and generating word
          clouds and distribution pie charts.
        </li>
        <li>
          <strong><a
            href="https://github.com/Dilettante258/Canteen-Management-System" target="_blank"
          >Canteen Management System</a
          ></strong
          >(2023.04): The programming course production utilized C language as
          the underlying architecture and implemented front-end visualization
          using the Win32 API.
        </li>
        <li>
          <strong
          ><a
            href="https://github.com/Dilettante258/dilettante258.github.io" target="_blank"
          >My personal homepage</a
          ></strong
          >(2023.12): I learned Astro and used it to rewrite a theme, and
          attempted to create a homepage for an AI enthusiast club from
          scratch.
        </li>
      </ul>
    </section>
  )
}

export default Article;