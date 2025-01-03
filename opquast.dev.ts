import { chromium } from "playwright";
import TurndownService from "turndown";
import fs from "fs";

const BASE_URL = "https://checklists.opquast.com";
const LANG = "fr";

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(`${BASE_URL}/${LANG}/assurance-qualite-web/`);
  const articlesContainer = await page.$(".grid-criterion");
  if (!articlesContainer) {
    throw new Error("No articles container found");
  }
  // get all articles links in titles h3
  const links = await articlesContainer.$$("h3 a");

  const urls = await Promise.all(
    links.map(async (link) => {
      return await link.getAttribute("href");
    })
  );

  for (const url of urls) {
    const goToUrl = `${BASE_URL}${url}`;
    await page.goto(goToUrl);

    //   get article content
    const title = await page.$eval(".o-wrapper h1", (h1) => h1.textContent);
    const intro = await page.$eval(".o-wrapper p", (p) => p.textContent);
    const tags = await page.$$eval("header .c-icon__keyword", (tags) =>
      tags.map((t) => {
        const tag = t.textContent;
        return tag?.split(" ").join("_");
      })
    );

    const htmlContent = await page.$eval(
      ".o-wrapper article",
      (article) => article.innerHTML
    );

    //   check if content is not empty
    if (!htmlContent || !title || !intro) {
      throw new Error("No article content found");
    }

    //   clean html content
    const cleanHtmlContent = htmlContent.split(
      `<p><a href="/fr/assurance-qualite-web/licence/">Auteur Opquast - Consulter la licence</a></p>`
    )[0];

    const cleanTitle = formatNumbers(title);

    const markdownContent = convertHtmlToMarkdown(cleanHtmlContent);
    const markdownIntro = convertHtmlToMarkdown(intro);
    const markdownTags = tags.join(" ");

    // template
    const content = `
${markdownTags}

${markdownIntro}

${markdownContent}
`;

    //   save file
    const fileName = `${cleanTitle}.md`;
    const filePath = `./data/obsidian/${fileName}`;

    if (!markdownContent) {
      throw new Error("No markdown content found");
    }

    fs.writeFile(filePath, content, (err) => {
      if (err) throw err;
      console.log("File has been saved!");
    });
  }
  await browser.close();
  //   const links = await nav.$$eval("a", (anchors) => anchors.map((a) => a.href));
}

run();

function convertHtmlToMarkdown(html: string) {
  const turndownService = new TurndownService();
  return turndownService.turndown(html);
}

function formatNumbers(inputString: string): string {
  return inputString.replace(/\b(\d{1,2})\b/g, (match) => {
    return match.padStart(3, "0");
  });
}
