import{d as o,u as t}from"../../nitro/nitro.mjs";import{b as a}from"../../_/notion.mjs";const s=o(async o=>{const s=t(o).notionPageIds;let i=[];if(s&&!s.includes("your_about_page_id_here")){const t=s.split(",").map(o=>o.trim()).filter(Boolean);i=(await Promise.all(t.map(t=>a(o,t)))).filter(o=>null!==o)}return{customPages:i}});export{s as default};
//# sourceMappingURL=site-config.get.mjs.map
