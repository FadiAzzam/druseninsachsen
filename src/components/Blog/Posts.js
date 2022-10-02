import React from "react";
import Post from "./Post";

import Damaskus from "../../static/imgs/damascus.JPG";
import kreuzkirche from "../../static/imgs/kreuzkirche.jpeg";
import Albrechtsburg from "../../static/imgs/234cd8fe-89bc-45f6-b88a-79a38af28d26.jpg";
import TechnischeSammlung from "../../static/imgs/227029030_849149242420787_6636204124649932930_n.jpg";
import Austausch from "../../static/imgs/Austausch.png";

const Posts = () => {
  const blogPosts = [
    {
      title: "Damaskuszimmer",
      body: `Einblick in Damaszener Gastfreundschaft im 19. Jahrhundert. Japanisches Palais `,
      date: "02 Oktober 2022",
      imgUrl: Damaskus,
    },
    {
      title: "kreuzkirche",
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
      date: "18 August 2022",
      imgUrl: kreuzkirche,
    },
    {
      title: "Albrechtsburg Meissen",
      body: `Am Sonntag fand wieder ein Treffen unseres Projekts zum
      interkulturellen Austausch statt. Die Regionalgruppe Dresden der
      Ingenieure ohne Grenzen hat für Menschen aus der Ukraine, Syrien
      und Deutschland einen Ausflug nach Meißen organisiert. Wir
      konnten gemeinsam selbstgemachte syrische Köstlichkeiten
      genießen und den Ausblick von der Albrechtsburg genießen. Wir
      freuen uns auf die nächsten Zusammenkünfte und auf neue
      Teilnehmende!`,
      date: "30 März 2021",
      imgUrl: Albrechtsburg,
    },
    {
      title: "Interkultureller Austausch",
      body: `
        Unter dem Motto "Zu Tisch bei Freunden" sind 10 Menschen zusammengekommen, 
        um gemeinsam gutes Essen zu genießen. Unter den selbst zubereiteten Leckereien waren Tabouli- und 
        Kartoffelsalat, gefüllte Weinblätter und Rhabarberkuchen - köstlich! Wir danken den Technischen 
        Sammlungen Dresden, dass sie uns ihre Räumlichkeiten zur Verfügung gestellt haben!`,
      date: "15 Juni 2022",
      imgUrl: Austausch,
    },
    {
      title: "Technische Sammlungen",
      body: `Unser Projekt zum Interkulturellen Austausch ist gestartet! Zum Auftakt ist eine Gruppe von aufgeschlossenen Menschen verschiedener Nationalitäten zusammengekommen und hat sich die Schätze und Kuriositäten der Technischen Sammlungen Dresden zeigen lassen. Herzlichen Dank an die TSD für die Unterstützung!
      `,
      date: "15 Juni 2022",
      imgUrl: TechnischeSammlung,
    },
  ];

  return (
    <>
      {blogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
    </>
  );
};

export default Posts;
