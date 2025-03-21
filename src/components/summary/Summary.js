import React from "react";
import styles from "./Summary.module.css";

export default function Summary() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>MicroLEIS DSS</h1>
      <h2 className={styles.subtitle}>
        Sistema de Apoyo a la Decisión sobre Evaluación de Tierras para la
        Protección de Suelos Agrícolas
      </h2>
      <hr className={styles.divider} />
      <h3 className={styles.sectionTitle}>Acerca de MicroLEIS:</h3>
      <p className={styles.text}>
        El sistema MicroLEIS se compone de un software interactivo y
        documentación explicativa que puede ser de utilidad a investigadores,
        educadores y técnicos interesados en el uso y manejo sostenibles de los
        suelos, con especial referencia a la región Mediterránea.
      </p>
      <p className={styles.text}>
        Dicho sistema proporciona un conjunto de herramientas informatizadas
        para el almacenamiento y gestión de datos básicos, así como para su
        interpretación práctica desde un punto de vista agro-ecológico. Sus
        principales características son:
      </p>
      <ul className={styles.list}>
        <li>Integración de datos y conocimientos mediante el uso de un conjunto de técnicas de bases de datos, modelos de ayuda a la decisión, modelos de simulación y análisis espaciales.</li>
        <li>Aplicaciones orientadas hacia los niveles de evaluación de tierras: parcela (suelo), tierra (clima+sitio+suelo) y campo (clima+sitio+suelo+manejo).</li>
        <li>
          Uso práctico para la evaluación de impactos ambientales y para la
          planificación del uso del suelo rural (manejo de cultivos, forestal,
          dehesas, etc.).
        </li>
        <li>
          Orientado a investigadores en ciencias del suelo, técnicos de
          planificación rural y estudiantes en ciencias agro-forestales.
        </li>
        <li>
          Herramientas informáticas diseñadas para la toma de decisiones
          agro-ambientales.
        </li>
      </ul>
      <hr className={styles.divider} />

      <h3 className={styles.sectionTitle}>Protección del software:</h3>
      <ul className={styles.list}>
        <li>MicroLEIS™ 1990 CSIC (TM# 1591179)</li>
        <li>Arena™ 1992 CSIC (TM# 0031035)</li>
        <li>Raizal™ 1995 CSIC (TM# 1971609)</li>
        <li>Planzar™ 1995 CSIC (TM# 2017112)</li>
        <li>CDBm™ 1996 CSIC (TM# 1507106)</li>
        <li>FCCas™ 1995 CSIC-FAO</li>
        <li>SDBm™ 1994 CSIC-FAO</li>
        <li>MDBm™ 2000 CSIC (TM# 2255200)</li>
        <li>Imp&Res™ 2001 CSIC (TM# 2357934)</li>
        <li>SDBmPlus™ 2002 CSIC-FAO (Solicitado)</li>
        <li>MicroLEIS-Spatialization 2002 CSIC (Solicitado)</li>
      </ul>
      <p className={styles.note}>
        Nota: Todo este software se encuentra protegido por las leyes de
        derechos de autor y otros tratados internacionales, correspondientes a
        las publicaciones científicas generadas y recogidas en la sección{" "}
        <strong>Documentación</strong>.
      </p>
      <hr className={styles.divider} />
      <h3 className={styles.sectionTitle}>Documentación disponible:</h3>
      <ul className={styles.docs}>
        <li>
          <a
            href="/docs/FolletoMicroLEIS.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Folleto de MicroLEIS (115 kb)
          </a>
        </li>
        <li>
          <a
            href="/docs/ArticuloConjunto.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Artículo de conjunto (230 kb)
          </a>
        </li>
      </ul>
      <hr className={styles.divider} />

      <p className={styles.note}>
        Esta edición en Internet de MicroLEIS ofrece todo el contenido
        actualizado de versiones anteriores, junto con las múltiples ventajas
        de las tecnologías web.
      </p>
      <p className={styles.text}>
        Con especial referencia a regiones mediterráneas
      </p>
      <p className={styles.text}>Versión bilingüe: Español/Inglés</p>
      <p className={styles.coordinator}>
        <strong>Coordinador:</strong> Prof. D. de la Rosa
      </p>
      <p className={styles.institution}>
        IRNAS, Instituto de Recursos Naturales y Agrobiología de Sevilla
        <br />
        CSIC, Consejo Superior de Investigaciones Científicas
        <br />
        Sevilla, España
      </p>

    </div>
  );
}