var allCodes = [
    { codigo: "H00", nombre: "ORZUELO Y CALACIO" },
    { codigo: "H000", nombre: "ORZUELO Y OTRAS INFLAMACIONES PROFUNDAS DEL PÁRPADO" },
    { codigo: "H001", nombre: "CALACIO (CHALAZION)" },
    { codigo: "H01", nombre: "OTRAS INFLAMACIONES DEL PÁRPADO" },
    { codigo: "H010", nombre: "BLEFARITIS" },
    { codigo: "H011", nombre: "DERMATOSIS NO INFECCIOSA DEL PARPADO" },
    { codigo: "H018", nombre: "OTRAS INFLAMACIONES ESPECIFICADAS DEL PARPADO" },
    { codigo: "H019", nombre: "INFLAMACION DEL PARPADO, NO ESPECIFICADA" },
    { codigo: "H02", nombre: "OTROS TRASTORNOS DE LOS PARPADOS" },
    { codigo: "H020", nombre: "ENTROPION Y TRIQUIASIS PALPEBRAL" },
    { codigo: "H021", nombre: "ECTROPION DEL PARPADO" },
    { codigo: "H022", nombre: "LAGOFTALMOS" },
    { codigo: "H023", nombre: "BLEFAROCALASIA" },
    { codigo: "H024", nombre: "BLEFAROPTOSIS" },
    { codigo: "H025", nombre: "OTROS TRASTORNOS FUNCIONALES DEL PARPADO" },
    { codigo: "H026", nombre: "XANTELASMA DEL PARPADO" },
    { codigo: "H027", nombre: "OTROS TRASTORNOS DEGENERATIVOS DEL PARPADO Y DEL AREA PERIOCULAR" },
    { codigo: "H028", nombre: "OTROS TRASTORNOS ESPECIFICADOS DEL PARPADO" },
    { codigo: "H029", nombre: "TRASTORNO DEL PARPADO, NO ESPECIFICADO" },
    { codigo: "H03", nombre: "INFECCION E INFESTACION PARASITARIAS DEL PARPADO EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H031", nombre: "COMPROMISO DEL PARPADO EN ENFERMEDADES INFECCIOSAS CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H038", nombre: "COMPROMISO DEL PARPADO EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H04", nombre: "TRASTORNOS DEL APARATO LAGRIMAL" },
    { codigo: "H040", nombre: "DACRIOADENITIS" },
    { codigo: "H041", nombre: "OTROS TRASTORNOS DE LA GLANDULA LAGRIMAL" },
    { codigo: "H042", nombre: "EPIFORA" },
    { codigo: "H043", nombre: "INFLAMACION AGUDA Y LA NO ESPECIFICADA DE LAS VIAS LAGRIMALES" },
    { codigo: "H044", nombre: "INFLAMACION CRONICA DE LAS VIAS LAGRIMALES" },
    { codigo: "H045", nombre: "ESTENOSIS E INSUFICIENCIA DE LAS VIAS LAGRIMALES" },
    { codigo: "H046", nombre: "OTROS CAMBIOS DE LAS VIAS LAGRIMALES" },
    { codigo: "H048", nombre: "OTROS TRASTORNOS ESPECIFICADOS DEL APARATO LAGRIMAL" },
    { codigo: "H049", nombre: "TRASTORNO DEL APARATO LAGRIMAL, NO ESPECIFICADO" },
    { codigo: "H05", nombre: "TRASTORNOS DE LA ORBITA" },
    { codigo: "H050", nombre: "INFLAMACION AGUDA DE LA ORBITA" },
    { codigo: "H051", nombre: "TRASTORNOS INFLAMATORIOS CRONICOS DE LA ORBITA" },
    { codigo: "H052", nombre: "AFECCIONES EXOFTALMICAS" },
    { codigo: "H053", nombre: "DEFORMIDAD DE LA ORBITA" },
    { codigo: "H054", nombre: "ENOFTALMIA" },
    { codigo: "H055", nombre: "RETENCION CUERPO EXTRA—O (ANTIGUO), CONSEC A HERIDA PENETRANTE ORBITA" },
    { codigo: "H058", nombre: "OTROS TRASTORNOS DE LA ORBITA" },
    { codigo: "H059", nombre: "TRASTORNO DE LA ORBITA, NO ESPECIFICADO" },
    { codigo: "H06", nombre: "TRASTORNOS DEL APARATO LAGRIMAL Y DE LA ORBITA EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H060", nombre: "TRASTORNOS DEL APARATO LAGRIMAL EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H061", nombre: "INFECCION E INFESTACION PARASITARIAS DE LA ORBITA EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H062", nombre: "EXOFTALMIA HIPERTIROIDEA (E05.-+)" },
    { codigo: "H063", nombre: "OTROS TRASTORNOS DE LA ORBITA EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H10", nombre: "CONJUNTIVITIS" },
    { codigo: "H100", nombre: "CONJUNTIVITIS MUCOPURULENTA" },
    { codigo: "H101", nombre: "CONJUNTIVITIS ATOPICA AGUDA" },
    { codigo: "H102", nombre: "OTRAS CONJUNTIVITIS AGUDAS" },
    { codigo: "H103", nombre: "CONJUNTIVITIS AGUDA, NO ESPECIFICADA" },
    { codigo: "H104", nombre: "CONJUNTIVITIS CRONICA" },
    { codigo: "H105", nombre: "BLEFAROCONJUNTIVITIS" },
    { codigo: "H108", nombre: "OTRAS CONJUNTIVITIS" },
    { codigo: "H109", nombre: "CONJUNTIVITIS, NO ESPECIFICADA" },
    { codigo: "H11", nombre: "OTROS TRASTORNOS DE LA CONJUNTIVA" },
    { codigo: "H110", nombre: "PTERIGION" },
    { codigo: "H111", nombre: "DEGENERACIONES Y DEPOSITOS CONJUNTIVALES" },
    { codigo: "H112", nombre: "CICATRICES CONJUNTIVALES" },
    { codigo: "H113", nombre: "HEMORRAGIA CONJUNTIVAL" },
    { codigo: "H114", nombre: "OTROS TRASTORNOS VASCULARES Y QUISTES CONJUNTIVALES" },
    { codigo: "H118", nombre: "OTROS TRASTORNOS ESPECIFICADOS DE LA CONJUNTIVA" },
    { codigo: "H119", nombre: "TRASTORNO DE LA CONJUNTIVA, NO ESPECIFICADO" },
    { codigo: "H13", nombre: "TRASTORNOS DE LA CONJUNTIVA EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H130", nombre: "INFECCION FILARICA DE LA CONJUNTIVA (B74.-+)" },
    { codigo: "H131", nombre: "CONJUNTIVITIS EN ENFERMEDADES INFECCIOSAS Y PARASITARIAS CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H132", nombre: "CONJUNTIVITIS EN OTRAS ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H133", nombre: "PENFIGOIDE OCULAR (L12.-+)" },
    { codigo: "H138", nombre: "OTROS TRASTORNOS DE LA CONJUNTIVA EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H15", nombre: "TRASTORNOS DE LA ESCLEROTICA" },
    { codigo: "H150", nombre: "ESCLERITIS" },
    { codigo: "H151", nombre: "EPISCLERITIS" },
    { codigo: "H158", nombre: "OTROS TRASTORNOS DE LA ESCLEROTICA" },
    { codigo: "H159", nombre: "TRASTORNO DE LA ESCLEROTICA, NO ESPECIFICADO" },
    { codigo: "H16", nombre: "QUERATITIS" },
    { codigo: "H160", nombre: "ULCERA DE LA CORNEA" },
    { codigo: "H161", nombre: "OTRAS QUERATITIS SUPERFICIALES SIN CONJUNTIVITIS" },
    { codigo: "H162", nombre: "QUERATOCONJUNTIVITIS" },
    { codigo: "H163", nombre: "QUERATITIS INTERSTICIAL Y PROFUNDA" },
    { codigo: "H164", nombre: "NEOVASCULARIZACION DE LA CORNEA" },
    { codigo: "H168", nombre: "OTRAS QUERATITIS" },
    { codigo: "H169", nombre: "QUERATITIS, NO ESPECIFICADA" },
    { codigo: "H17", nombre: "OPACIDADES Y CICATRICES CORNEALES" },
    { codigo: "H170", nombre: "LEUCOMA ADHERENTE" },
    { codigo: "H171", nombre: "OTRAS OPACIDADES CENTRALES DE LA CORNEA" },
    { codigo: "H178", nombre: "OTRAS OPACIDADES O CICATRICES DE LA CORNEA" },
    { codigo: "H179", nombre: "CICATRIZ U OPACIDAD DE LA CORNEA, NO ESPECIFICADA" },
    { codigo: "H18", nombre: "OTROS TRASTORNOS DE LA CORNEA" },
    { codigo: "H180", nombre: "PIGMENTACIONES Y DEPOSITOS EN LA CORNEA" },
    { codigo: "H181", nombre: "QUERATOPATIA VESICULAR" },
    { codigo: "H182", nombre: "OTROS EDEMAS DE LA CORNEA" },
    { codigo: "H183", nombre: "CAMBIOS EN LAS MEMBRANAS DE LA CORNEA" },
    { codigo: "H184", nombre: "DEGENERACION DE LA CORNEA" },
    { codigo: "H185", nombre: "DISTROFIA HEREDITARIA DE LA CORNEA" },
    { codigo: "H186", nombre: "QUERATOCONO" },
    { codigo: "H187", nombre: "OTRAS DEFORMIDADES DE LA CORNEA" },
    { codigo: "H188", nombre: "OTROS TRASTORNOS ESPECIFICADOS DE LA CORNEA" },
    { codigo: "H189", nombre: "TRASTORNO DE LA CORNEA, NO ESPECIFICADO" },
    { codigo: "H19", nombre: "TRASTORNOS DE LA ESCLEROTICA Y DE LA CORNEA EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H190", nombre: "ESCLERITIS Y EPISCLERITIS EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H191", nombre: "QUERATITIS Y QUERATOCONJUNTIVITIS POR HERPES SIMPLE (B00.5+)" },
    { codigo: "H192", nombre: "QUERATITIS Y QUERATOCONJUNTIVITIS EN ENFERMEDADES INFECCIOSAS Y PARASITARIAS, CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H193", nombre: "QUERATITIS Y QUERATOCONJUNTIVITIS EN OTRAS ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H198", nombre: "OTROS TRASTORNOS DE LA ESCLEROTICA Y DE LA CORNEA EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H20", nombre: "IRIDOCICLITIS" },
    { codigo: "H200", nombre: "IRIDOCICLITIS AGUDA Y SUBAGUDA" },
    { codigo: "H201", nombre: "IRIDOCICLITIS CRONICA" },
    { codigo: "H202", nombre: "IRIDOCICLITIS INDUCIDA POR TRASTORNO DEL CRISTALINO" },
    { codigo: "H208", nombre: "OTRAS IRIDOCICLITIS ESPECIFICADAS" },
    { codigo: "H209", nombre: "IRIDOCICLITIS, NO ESPECIFICADA" },
    { codigo: "H21", nombre: "OTROS TRASTORNOS DEL IRIS Y DEL CUERPO CILIAR" },
    { codigo: "H210", nombre: "HIFEMA" },
    { codigo: "H211", nombre: "OTROS TRASTORNOS VASCULARES DEL IRIS Y DEL CUERPO CILIAR" },
    { codigo: "H212", nombre: "DEGENERACION DEL IRIS Y DEL CUERPO CILIAR" },
    { codigo: "H213", nombre: "QUISTE DEL IRIS, DEL CUERPO CILIAR Y DE LA CAMARA ANTERIOR" },
    { codigo: "H214", nombre: "MEMBRANAS PUPILARES" },
    { codigo: "H215", nombre: "OTRAS ADHERENCIAS Y DESGARROS DEL IRIS Y DEL CUERPO CILIAR" },
    { codigo: "H218", nombre: "OTROS TRASTORNOS ESPECIFICADOS DEL IRIS Y DEL CUERPO CILIAR" },
    { codigo: "H219", nombre: "TRASTORNO DEL IRIS Y DEL CUERPO CILIAR, NO ESPECIFICADO" },
    { codigo: "H22", nombre: "TRASTORNOS DEL IRIS Y DEL CUERPO CILIAR EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H220", nombre: "IRIDOCICLITIS EN ENFERMEDADES INFECCIOSAS Y PARASITARIAS CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H221", nombre: "IRIDOCICLITIS EN OTRAS ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H228", nombre: "OTROS TRASTORNOS DEL IRIS Y DEL CUERPO CILIAR EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H25", nombre: "CATARATA SENIL" },
    { codigo: "H250", nombre: "CATARATA SENIL INCIPIENTE" },
    { codigo: "H251", nombre: "CATARATA SENIL NUCLEAR" },
    { codigo: "H252", nombre: "CATARATA SENIL, TIPO MORGAGNIAN" },
    { codigo: "H258", nombre: "OTRAS CATARATAS SENILES" },
    { codigo: "H259", nombre: "CATARATA SENIL, NO ESPECIFICADA" },
    { codigo: "H26", nombre: "OTRAS CATARATAS" },
    { codigo: "H260", nombre: "CATARATA INFANTIL, JUVENIL Y PRESENIL" },
    { codigo: "H261", nombre: "CATARATA TRAUMATICA" },
    { codigo: "H262", nombre: "CATARATA COMPLICADA" },
    { codigo: "H263", nombre: "CATARATA INDUCIDA POR DROGAS" },
    { codigo: "H264", nombre: "CATARATA RESIDUAL" },
    { codigo: "H268", nombre: "OTRAS FORMAS ESPECIFICADAS DE CATARATA" },
    { codigo: "H269", nombre: "CATARATA, NO ESPECIFICADA" },
    { codigo: "H27", nombre: "OTROS TRASTORNOS DEL CRISTALINO" },
    { codigo: "H270", nombre: "AFAQUIA" },
    { codigo: "H271", nombre: "LUXACION DEL CRISTALINO" },
    { codigo: "H278", nombre: "OTROS TRASTORNOS ESPECIFICADOS DEL CRISTALINO" },
    { codigo: "H279", nombre: "TRASTORNO DEL CRISTALINO, NO ESPECIFICADO" },
    { codigo: "H28", nombre: "CATARATA Y OTROS TRASTORNOS DEL CRISTALINO EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H280", nombre: "CATARATA DIABETICA (E10-E14+ CON CUARTO CARACTER COMUN .3)" },
    { codigo: "H281", nombre: "CATARATA EN OTRAS ENFERMEDADES ENDOCRINAS, NUTRICIONALES Y METABOLICAS CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H282", nombre: "CATARATA EN OTRAS ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H288", nombre: "OTROS TRASTORNOS DEL CRISTALINO EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H30", nombre: "INFLAMACION CORIORRETINIANA" },
    { codigo: "H300", nombre: "CORIORRETINITIS FOCAL" },
    { codigo: "H301", nombre: "CORIORRETINITIS DISEMINADA" },
    { codigo: "H302", nombre: "CICLITIS POSTERIOR" },
    { codigo: "H308", nombre: "OTRAS CORIORRETINITIS" },
    { codigo: "H309", nombre: "CORIORRETINITIS, NO ESPECIFICADA" },
    { codigo: "H31", nombre: "OTROS TRASTORNOS DE LA COROIDES" },
    { codigo: "H310", nombre: "CICATRICES CORIORRETINIANAS" },
    { codigo: "H311", nombre: "DEGENERACION COROIDEA" },
    { codigo: "H312", nombre: "DISTROFIA COROIDEA HEREDITARIA" },
    { codigo: "H313", nombre: "HEMORRAGIA Y RUPTURA DE LA COROIDES" },
    { codigo: "H314", nombre: "DESPRENDIMIENTO DE LA COROIDES" },
    { codigo: "H318", nombre: "OTROS TRASTORNOS ESPECIFICADOS DE LA COROIDES" },
    { codigo: "H319", nombre: "TRASTORNO DE LA COROIDES, NO ESPECIFICADO" },
    { codigo: "H32", nombre: "TRASTORNOS CORIORRETINIANOS EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H320", nombre: "INFLAMACION CORIORRETINIANA EN ENFERMEDADES INFECCIOSAS Y PARASITARIAS CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H328", nombre: "OTROS TRASTORNOS CORIORRETINIANOS EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H33", nombre: "DESPRENDIMIENTO Y DESGARRO DE LA RETINA" },
    { codigo: "H330", nombre: "DESPRENDIMIENTO DE LA RETINA CON RUPTURA" },
    { codigo: "H331", nombre: "RETINOSQUISIS Y QUISTES DE LA RETINA" },
    { codigo: "H332", nombre: "DESPRENDIMIENTO SEROSO DE LA RETINA" },
    { codigo: "H333", nombre: "DESGARRO DE LA RETINA SIN DESPRENDIMIENTO" },
    { codigo: "H334", nombre: "DESPRENDIMIENTO DE LA RETINA POR TRACCION" },
    { codigo: "H335", nombre: "OTROS DESPRENDIMIENTOS DE LA RETINA" },
    { codigo: "H34", nombre: "OCLUSION VASCULAR DE LA RETINA" },
    { codigo: "H340", nombre: "OCLUSION ARTERIAL TRANSITORIA DE LA RETINA" },
    { codigo: "H341", nombre: "OCLUSION DE LA ARTERIA CENTRAL DE LA RETINA" },
    { codigo: "H342", nombre: "OTRAS FORMAS DE OCLUSION DE LA ARTERIA DE LA RETINA" },
    { codigo: "H348", nombre: "OTRAS OCLUSIONES VASCULARES RETINIANAS" },
    { codigo: "H349", nombre: "OCLUSION VASCULAR RETINIANA, SIN OTRA ESPECIFICACION" },
    { codigo: "H35", nombre: "OTROS TRASTORNOS DE LA RETINA" },
    { codigo: "H350", nombre: "RETINOPATIAS DEL FONDO Y CAMBIOS VASCULARES RETINIANOS" },
    { codigo: "H351", nombre: "RETINOPATIA DE LA PREMATURIDAD" },
    { codigo: "H352", nombre: "OTRAS RETINOPATIAS PROLIFERATIVAS" },
    { codigo: "H353", nombre: "DEGENERACION DE LA MACULA Y DEL POLO POSTERIOR DEL OJO" },
    { codigo: "H354", nombre: "DEGENERACION PERIFERICA DE LA RETINA" },
    { codigo: "H355", nombre: "DISTROFIA HEREDITARIA DE LA RETINA" },
    { codigo: "H356", nombre: "HEMORRAGIA RETINIANA" },
    { codigo: "H357", nombre: "SEPARACION DE LAS CAPAS DE LA RETINA" },
    { codigo: "H358", nombre: "OTROS TRASTORNOS ESPECIFICADOS DE LA RETINA" },
    { codigo: "H359", nombre: "TRASTORNO DE LA RETINA, NO ESPECIFICADO" },
    { codigo: "H36", nombre: "TRASTORNOS DE LA RETINA EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H360", nombre: "RETINOPATIA DIABETICA (E10-E14+ CON CUARTO CARACTER COMUN .3)" },
    { codigo: "H368", nombre: "OTROS TRASTORNOS DE LA RETINA EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H40", nombre: "GLAUCOMA" },
    { codigo: "H400", nombre: "SOSPECHA DE GLAUCOMA" },
    { codigo: "H401", nombre: "GLAUCOMA PRIMARIO DE ANGULO ABIERTO" },
    { codigo: "H402", nombre: "GLAUCOMA PRIMARIO DE ANGULO CERRADO" },
    { codigo: "H403", nombre: "GLAUCOMA SECUNDARIO A TRAUMATISMO OCULAR" },
    { codigo: "H404", nombre: "GLAUCOMA SECUNDARIO A INFLAMACION OCULAR" },
    { codigo: "H405", nombre: "GLAUCOMA SECUNDARIO A OTROS TRASTORNOS DEL OJO" },
    { codigo: "H406", nombre: "GLAUCOMA SECUNDARIO A DROGAS" },
    { codigo: "H408", nombre: "OTROS GLAUCOMAS" },
    { codigo: "H409", nombre: "GLAUCOMA, NO ESPECIFICADO" },
    { codigo: "H42", nombre: "GLAUCOMA EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H420", nombre: "GLAUCOMA EN ENFERMEDADES ENDOCRINAS, NUTRICIONALES Y METABOLICAS, CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H428", nombre: "GLAUCOMA EN OTRAS ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H43", nombre: "TRASTORNOS DEL CUERPO VITREO" },
    { codigo: "H430", nombre: "PROLAPSO DEL VITREO" },
    { codigo: "H431", nombre: "HEMORRAGIA DEL VITREO" },
    { codigo: "H432", nombre: "DEPOSITOS CRISTALINOS EN EL CUERPO VITREO" },
    { codigo: "H433", nombre: "OTRAS OPACIDADES VITREAS" },
    { codigo: "H438", nombre: "OTROS TRASTORNOS DEL CUERPO VITREO" },
    { codigo: "H439", nombre: "TRASTORNO DEL CUERPO VITREO, NO ESPECIFICADO" },
    { codigo: "H44", nombre: "TRASTORNOS DEL GLOBO OCULAR" },
    { codigo: "H440", nombre: "ENDOFTALMITIS PURULENTA" },
    { codigo: "H441", nombre: "OTRAS ENDOFTALMITIS" },
    { codigo: "H442", nombre: "MIOPIA DEGENERATIVA" },
    { codigo: "H443", nombre: "OTROS TRASTORNOS DEGENERATIVOS DEL GLOBO OCULAR" },
    { codigo: "H444", nombre: "HIPOTONIA OCULAR" },
    { codigo: "H445", nombre: "AFECCIONES DEGENERATIVAS DEL GLOBO OCULAR" },
    { codigo: "H446", nombre: "RETENCION INTRAOCULAR DE CUERPO EXTRA—O MAGNETICO (ANTIGUO)" },
    { codigo: "H447", nombre: "RETENCION INTRAOCULAR DE CUERPO EXTRA—O NO MAGNETICO (ANTIGUO)" },
    { codigo: "H448", nombre: "OTROS TRASTORNOS DEL GLOBO OCULAR" },
    { codigo: "H449", nombre: "TRASTORNO DEL GLOBO OCULAR, NO ESPECIFICADO" },
    { codigo: "H45", nombre: "TRASTORNOS DEL CUERPO VITREO Y DEL GLOBO OCULAR EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H450", nombre: "HEMORRAGIA DEL VITREO EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H451", nombre: "ENDOFTALMITIS EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H458", nombre: "OTROS TRASTORNOS DEL CUERPO VITREO Y DEL GLOBO OCULAR EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H46", nombre: "NEURITIS OPTICA" },
    { codigo: "H47", nombre: "OTROS TRASTORNOS DEL NERVIO OPTICO (II PAR) Y DE LAS VIAS OPTICAS" },
    { codigo: "H470", nombre: "TRASTORNOS DEL NERVIO OPTICO, NO CLASIFICADOS EN OTRA PARTE" },
    { codigo: "H471", nombre: "PAPILEDEMA, NO ESPECIFICADO" },
    { codigo: "H472", nombre: "ATROFIA OPTICA" },
    { codigo: "H473", nombre: "OTROS TRASTORNOS DEL DISCO OPTICO" },
    { codigo: "H474", nombre: "TRASTORNOS DEL QUIASMA OPTICO" },
    { codigo: "H475", nombre: "TRASTORNOS DE OTRAS VIAS OPTICAS" },
    { codigo: "H476", nombre: "TRASTORNOS DE LA CORTEZA VISUAL" },
    { codigo: "H477", nombre: "TRASTORNO DE LAS VIAS OPTICAS, NO ESPECIFICADO" },
    { codigo: "H48", nombre: "TRASTORNO DEL NERVIO OPTICO (II PAR) Y DE LAS VIAS OPTICAS EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H480", nombre: "ATROFIA OPTICA EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H481", nombre: "NEURITIS RETROBULBAR EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H488", nombre: "OTROS TRASTORNOS DEL NERVIO OPTICO Y DE LAS VIAS OPTICAS EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H49", nombre: "ESTRABISMO PARALITICO" },
    { codigo: "H490", nombre: "PARALISIS DEL NERVIO MOTOR OCULAR COMUN (III PAR)" },
    { codigo: "H491", nombre: "PARALISIS DEL NERVIO PATETICO (IV PAR)" },
    { codigo: "H492", nombre: "PARALISIS DEL NERVIO MOTOR OCULAR EXTERNO (VI PAR)" },
    { codigo: "H493", nombre: "OFTALMOPLEJIA TOTAL (EXTERNA)" },
    { codigo: "H494", nombre: "OFTALMOPLEJIA EXTERNA PROGRESIVA" },
    { codigo: "H498", nombre: "OTROS ESTRABISMOS PARALITICOS" },
    { codigo: "H499", nombre: "ESTRABISMO PARALITICO, NO ESPECIFICADO" },
    { codigo: "H50", nombre: "OTROS ESTRABISMOS" },
    { codigo: "H500", nombre: "ESTRABISMO CONCOMITANTE CONVERGENTE" },
    { codigo: "H501", nombre: "ESTRABISMO CONCOMITANTE DIVERGENTE" },
    { codigo: "H502", nombre: "ESTRABISMO VERTICAL" },
    { codigo: "H503", nombre: "HETEROTROPIA INTERMITENTE" },
    { codigo: "H504", nombre: "OTRAS HETEROTROPIAS O LAS NO ESPECIFICADAS" },
    { codigo: "H505", nombre: "HETEROFORIA" },
    { codigo: "H506", nombre: "ESTRABISMO MECANICO" },
    { codigo: "H508", nombre: "OTROS ESTRABISMOS ESPECIFICADOS" },
    { codigo: "H509", nombre: "ESTRABISMO, NO ESPECIFICADO" },
    { codigo: "H51", nombre: "OTROS TRASTORNOS DE LOS MOVIMIENTOS BINOCULARES" },
    { codigo: "H510", nombre: "PARALISIS DE LA CONJUGACION DE LA MIRADA" },
    { codigo: "H511", nombre: "EXCESO E INSUFICIENCIA DE LA CONVERGENCIA OCULAR" },
    { codigo: "H512", nombre: "OFTALMOPLEJIA INTERNUCLEAR" },
    { codigo: "H518", nombre: "OTROS TRASTORNOS ESPECIFICADOS DE LOS MOVIMIENTOS BINOCULARES" },
    { codigo: "H519", nombre: "TRASTORNO DEL MOVIMIENTO BINOCULAR, NO ESPECIFICADO" },
    { codigo: "H52", nombre: "TRASTORNOS DE LA ACOMODACION Y DE LA REFRACCION" },
    { codigo: "H520", nombre: "HIPERMETROPIA" },
    { codigo: "H521", nombre: "MIOPIA" },
    { codigo: "H522", nombre: "ASTIGMATISMO" },
    { codigo: "H523", nombre: "ANISOMETROPIA Y ANISEICONIA" },
    { codigo: "H524", nombre: "PRESBICIA" },
    { codigo: "H525", nombre: "TRASTORNOS DE LA ACOMODACION" },
    { codigo: "H526", nombre: "OTROS TRASTORNOS DE LA REFRACCION" },
    { codigo: "H527", nombre: "TRASTORNO DE LA REFRACCION, NO ESPECIFICADO" },
    { codigo: "H53", nombre: "ALTERACIONES DE LA VISION" },
    { codigo: "H530", nombre: "AMBLIOPIA EX ANOPSIA" },
    { codigo: "H531", nombre: "ALTERACIONES VISUALES SUBJETIVAS" },
    { codigo: "H532", nombre: "DIPLOPIA" },
    { codigo: "H533", nombre: "OTROS TRASTORNOS DE LA VISION BINOCULAR" },
    { codigo: "H534", nombre: "DEFECTOS DEL CAMPO VISUAL" },
    { codigo: "H535", nombre: "DEFICIENCIA DE LA VISION CROMATICA" },
    { codigo: "H536", nombre: "CEGUERA NOCTURNA" },
    { codigo: "H538", nombre: "OTRAS ALTERACIONES VISUALES" },
    { codigo: "H539", nombre: "ALTERACION VISUAL, NO ESPECIFICADA" },
    { codigo: "H54", nombre: "CEGUERA Y DISMINUCION DE LA AGUDEZA VISUAL" },
    { codigo: "H540", nombre: "CEGUERA DE AMBOS OJOS" },
    { codigo: "H541", nombre: "CEGUERA DE UN OJO, VISION SUBNORMAL DEL OTRO" },
    { codigo: "H542", nombre: "VISION SUBNORMAL DE AMBOS OJOS" },
    { codigo: "H543", nombre: "DISMINUCION INDETERMINADA DE LA AGUDEZA VISUAL EN AMBOS OJOS" },
    { codigo: "H544", nombre: "CEGUERA DE UN OJO" },
    { codigo: "H545", nombre: "VISION SUBNORMAL DE UN OJO" },
    { codigo: "H546", nombre: "DISMINUCION INDETERMINADA DE LA AGUDEZA VISUAL DE UN OJO" },
    { codigo: "H547", nombre: "DISMINUCION DE LA AGUDEZA VISUAL, SIN ESPECIFICACION" },
    { codigo: "H55", nombre: "NISTAGMO Y OTROS MOVIMIENTOS OCULARES IRREGULARES" },
    { codigo: "H57", nombre: "OTROS TRASTORNOS DEL OJO Y SUS ANEXOS" },
    { codigo: "H570", nombre: "ANOMALIAS DE LA FUNCION PUPILAR" },
    { codigo: "H571", nombre: "DOLOR OCULAR" },
    { codigo: "H578", nombre: "OTROS TRASTORNOS ESPECIFICADOS DEL OJO Y SUS ANEXOS" },
    { codigo: "H579", nombre: "TRASTORNO DEL OJO Y SUS ANEXOS, NO ESPECIFICADO" },
    { codigo: "H58", nombre: "OTROS TRASTORNOS DEL OJO Y SUS ANEXOS EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H580", nombre: "ANOMALIAS DE LA FUNCION PUPILAR EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H581", nombre: "ALTERACIONES DE LA VISION EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H588", nombre: "OTROS TRASTORNOS ESPECIFICADOS DEL OJO EN ENFERMEDADES CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H59", nombre: "TRASTORNOS DEL OJO Y SUS ANEXOS CONSECUTIVOS A PROCEDIMIENTOS, NO CLASIFICADAS EN OTRA PARTE" },
    { codigo: "H590", nombre: "SINDROME VITREO CONSECUTIVO A CIRUGIA DE CATARATA" },
    { codigo: "H598", nombre: "OTROS TRASTORNOS DEL OJO Y SUS ANEXOS, CONSECUTIVOS A PROCEDIMIENTOS" },
    { codigo: "H599", nombre: "TRASTORNO NO ESPECIFICADO DEL OJO Y SUS ANEXOS, CONSECUTIVO A PROCEDIMIENTOS" },
]

var codeLoca = [
    {codigo:"1",localidad:"USAQUEN"},
    {codigo:"2",localidad:"CHAPINERO"},
    {codigo:"3",localidad:"SANTA FE"},
    {codigo:"4",localidad:"SAN CRISTOBAL"},
    {codigo:"5",localidad:"USME"},
    {codigo:"6",localidad:"TUNJUELITO"},
    {codigo:"7",localidad:"BOSA"},
    {codigo:"8",localidad:"KENNEDY"},
    {codigo:"9",localidad:"FONTIBON"},
    {codigo:"10",localidad:"ENGATIVA"},
    {codigo:"11",localidad:"SUBA"},
    {codigo:"12",localidad:"BARRIOS UNIDOS"},
    {codigo:"13",localidad:"TEUSAQUILLO"},
    {codigo:"14",localidad:"LOS MARTIRES"},
    {codigo:"15",localidad:"ANTONIO NARIÑO"},
    {codigo:"16",localidad:"PUENTE ARANDA"},
    {codigo:"17",localidad:"LA CANDELARIA"},
    {codigo:"18",localidad:"RAFAEL URIBE URIBE"},
    {codigo:"19",localidad:"CIUDAD BOLIVAR"},
    {codigo:"20",localidad:"SUMAPAZ"},
]

document.addEventListener('pointermove', e => {

    var codigoIngresado;

    codigoIngresado = document.getElementById("c1").value;

    for (var i = 0; i < allCodes.length; i++) {
        if (codigoIngresado.toUpperCase() == allCodes[i].codigo) {
            document.getElementById("c_1").value = allCodes[i].nombre
        }
    }

})

document.addEventListener('keyup', e => {

    var codigoIngresado;

    codigoIngresado = document.getElementById("digitarCodigo1").value;

    for (var i = 0; i < allCodes.length; i++) {
        if (codigoIngresado.toUpperCase() == allCodes[i].codigo) {
            document.getElementById("c_1").value = allCodes[i].nombre
        }
    }

})

document.addEventListener('keyup', e => {

    var nombreIngresado;

    nombreIngresado = document.getElementById("c_1").value;

    for (var i = 0; i < allCodes.length; i++) {
        if (nombreIngresado.toUpperCase() == allCodes[i].nombre) {
            document.getElementById("c1").value = allCodes[i].codigo
        }
    }

})

document.addEventListener('pointermove', e => {

    var codigoIngresado;

    codigoIngresado = document.getElementById("c2").value;

    for (var i = 0; i < allCodes.length; i++) {
        if (codigoIngresado.toUpperCase() == allCodes[i].codigo) {
            document.getElementById("c_2").value = allCodes[i].nombre
        }
    }

})

document.addEventListener('keyup', e => {

    var codigoIngresado;

    codigoIngresado = document.getElementById("digitarCodigo2").value;

    for (var i = 0; i < allCodes.length; i++) {
        if (codigoIngresado.toUpperCase() == allCodes[i].codigo) {
            document.getElementById("c_2").value = allCodes[i].nombre
        }
    }

})

document.addEventListener('keyup', e => {

    var nombreIngresado;

    nombreIngresado = document.getElementById("c_2").value;

    for (var i = 0; i < allCodes.length; i++) {
        if (nombreIngresado.toUpperCase() == allCodes[i].nombre) {
            document.getElementById("c2").value = allCodes[i].codigo
        }
    }

})

document.addEventListener('pointermove', e => {

    var codigoIngresado;

    codigoIngresado = document.getElementById("c3").value;

    for (var i = 0; i < allCodes.length; i++) {
        if (codigoIngresado.toUpperCase() == allCodes[i].codigo) {
            document.getElementById("c_3").value = allCodes[i].nombre
        }
    }

})

document.addEventListener('keyup', e => {

    var codigoIngresado;

    codigoIngresado = document.getElementById("digitarCodigo3").value;

    for (var i = 0; i < allCodes.length; i++) {
        if (codigoIngresado.toUpperCase() == allCodes[i].codigo) {
            document.getElementById("c_3").value = allCodes[i].nombre
        }
    }

})

document.addEventListener('keyup', e => {

    var nombreIngresado;

    nombreIngresado = document.getElementById("c_3").value;

    for (var i = 0; i < allCodes.length; i++) {
        if (nombreIngresado.toUpperCase() == allCodes[i].nombre) {
            document.getElementById("c3").value = allCodes[i].codigo
        }
    }

})

//Calcular edad
document.addEventListener('selectionchange', e => {

    var fecha = new Date(document.getElementById("fechaNacimiento").value)
    var fechaHoy = new Date()

    //var nacimiento=new Date(fecha)


    if (fechaHoy.getDate() >= fecha.getDate() + 1 && fechaHoy.getMonth() + 1 >= fecha.getMonth() + 1) {
        document.getElementById("edad").value = fechaHoy.getFullYear() - fecha.getFullYear()

    }
    else {
        document.getElementById("edad").value = (fechaHoy.getFullYear() - fecha.getFullYear()) - 1
    }

})

//Códigos localidades
document.addEventListener('keyup', e => {

    var codigoIngresado;

    codigoIngresado = document.getElementById("codigo").value;

    for (var i = 0; i < codeLoca.length; i++) {
        if (codigoIngresado.toUpperCase() == codeLoca[i].codigo) {
            document.getElementById("localidad").value = codeLoca[i].localidad
        }
    }

})

document.addEventListener('keyup', e => {

    var nombreIngresado;

    nombreIngresado = document.getElementById("localidad").value;

    for (var i = 0; i < codeLoca.length; i++) {
        if (nombreIngresado.toUpperCase() == codeLoca[i].localidad) {
            document.getElementById("codigo").value = codeLoca[i].codigo
        }
    }

})

//bases de datos

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, addDoc, collection, getDocs, updateDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyAAM9wEDvpMSXZN5qhrFP_jcuSeInfvYjc",
    authDomain: "historiaclinica-9aeb5.firebaseapp.com",
    projectId: "historiaclinica-9aeb5",
    storageBucket: "historiaclinica-9aeb5.appspot.com",
    messagingSenderId: "529483926572",
    appId: "1:529483926572:web:52b3a116e1ae8a3453d589",
    measurementId: "G-ETXFHVREVE"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;

        send.addEventListener('click', (e) => {
            //Datos personales
            var fecha = document.getElementById("fecha").value
            var tipoIdentificacion = document.getElementById("identificacion").value
            var numeroIdentificacion = document.getElementById("numero").value
            var apellidos = document.getElementById("apellidos").value
            var nombres = document.getElementById("nombres").value
            var genero = document.getElementById("genero").value
            var fechaNacimiento = document.getElementById("fechaNacimiento").value
            var edad = document.getElementById("edad").value
            var procedencia = document.getElementById("procedencia").value
            var ocupacion = document.getElementById("ocupacion").value
            var direccionResidencia = document.getElementById("direccionResidencia").value
            var barrio = document.getElementById("barrio").value
            var telefono = document.getElementById("telefono").value
            var localidad = document.getElementById("localidad").value
            var codigo = document.getElementById("codigo").value
            var procedencia2 = document.getElementById("procedencia2").value
            var acompañante = document.getElementById("acompañante").value
            var parentesco2 = document.getElementById("parentesco2").value
            var telefono2 = document.getElementById("telefono2").value
            var fechaUltimoControl = document.getElementById("fechaUltimoControl").value
            var eps = document.getElementById("eps").value
            var tipoAfiliacion = document.getElementById("tipoAfiliacion").value

            //Anamnesis
            var motivoConsulta = document.getElementById("motivoConsulta").value
            var antecedentesAnamnesis = document.getElementById("antecedentesAnamnesis").value

            //Signos y síntomas
            var cefalea = document.getElementById("cefalea").value
            var astenopiaVL = document.getElementById("astenopiaVL").value
            var problemasConcentracion = document.getElementById("problemasConcentracion").value
            var cabeceo = document.getElementById("cabeceo").value
            var comprensionLectura = document.getElementById("comprensionLectura").value
            var cierreOjo = document.getElementById("cierreOjo").value
            var posicionCompensatoriaCabeza = document.getElementById("posicionCompensatoriaCabeza").value

            //Lensometría
            var esferaOD = document.getElementById("esferaOD").value
            var cilindroOD = document.getElementById("cilindroOD").value
            var ejeOD = document.getElementById("ejeOD").value
            var adicionOD = document.getElementById("adicionOD").value
            var avvlOD = document.getElementById("avvlOD").value
            var avvpOD = document.getElementById("avvpOD").value
            var esferaOI = document.getElementById("esferaOI").value
            var cilindroOI = document.getElementById("cilindroOI").value
            var ejeOI = document.getElementById("ejeOI").value
            var adicionOI = document.getElementById("adicionOI").value
            var avvlOI = document.getElementById("avvlOI").value
            var avvpOI = document.getElementById("avvpOI").value
            var tipoLente = document.getElementById("tipoLente").value
            var filtro = document.getElementById("filtro").value
            var tiempoUso = document.getElementById("tiempoUso").value

            //Agudeza visual
            var testUtilizado = document.getElementById("testUtilizado").value
            var lejosSCOD = document.getElementById("lejosSCOD").value
            var phSCOD = document.getElementById("phSCOD").value
            var aoSCODOI = document.getElementById("aoSCODOI").value
            var cercaSCOD = document.getElementById("cercaSCOD").value
            var aoSCODOI2 = document.getElementById("aoSCODOI2").value
            var lejosSCOI = document.getElementById("lejosSCOI").value
            var phSCOI = document.getElementById("phSCOI").value
            var cercaSCOI = document.getElementById("cercaSCOI").value

            //Motilidad ocular
            var hirchberg = document.getElementById("hirchberg").value
            var kappaOD = document.getElementById("kappaOD").value
            var kappaOI = document.getElementById("kappaOI").value
            var duccionesOD = document.getElementById("duccionesOD").value
            var duccionesOI = document.getElementById("duccionesOI").value
            var versiones = document.getElementById("versiones").value

            //Alineamiento Ocular
            var coverTest = document.getElementById("coverTest").value
            var krimsky = document.getElementById("krimsky").value
            var white = document.getElementById("white").value
            var seisSC = document.getElementById("seisSC").value
            var seisCC = document.getElementById("seisCC").value
            var seisADD = document.getElementById("seisADD").value
            var cuarentaSC = document.getElementById("cuarentaSC").value
            var cuarentaCC = document.getElementById("cuarentaCC").value
            var cuarentaADD = document.getElementById("cuarentaADD").value

            //Cuadro de medidas
            var vl1 = document.getElementById("vl1").value
            var vl2 = document.getElementById("vl2").value
            var vl3 = document.getElementById("vl3").value
            var vl4 = document.getElementById("vl4").value
            var vl5 = document.getElementById("vl5").value
            var vl6 = document.getElementById("vl6").value
            var vl7 = document.getElementById("vl7").value
            var vl8 = document.getElementById("vl8").value
            var vl9 = document.getElementById("vl9").value
            var vp1 = document.getElementById("vp1").value
            var vp2 = document.getElementById("vp2").value
            var vp3 = document.getElementById("vp3").value
            var vp4 = document.getElementById("vp4").value
            var vp5 = document.getElementById("vp5").value
            var vp6 = document.getElementById("vp6").value
            var vp7 = document.getElementById("vp7").value
            var vp8 = document.getElementById("vp8").value
            var vp9 = document.getElementById("vp9").value

            //Valoración acomodativa
            var acaCalculado = document.getElementById("acaCalculado").value
            var gradiente = document.getElementById("gradiente").value
            var amplitudOD = document.getElementById("amplitudOD").value
            var flexibilidadCpmOD = document.getElementById("flexibilidadCpmOD").value
            var flexibilidadMasOD = document.getElementById("flexibilidadMasOD").value
            var flexibilidadMenosOD = document.getElementById("flexibilidadMenosOD").value
            var aca = document.getElementById("aca").value
            var amplitudOI = document.getElementById("amplitudOI").value
            var flexibilidadCpmOI = document.getElementById("flexibilidadCpmOI").value
            var flexibilidadMasOI = document.getElementById("flexibilidadMasOI").value
            var flexibilidadMenosOI = document.getElementById("flexibilidadMenosOI").value
            var amplitudAcomodacion = document.getElementById("amplitudAcomodacion").value
            var facilidadAcomodativa = document.getElementById("facilidadAcomodativa").value
            var acomodativaMas = document.getElementById("acomodativaMas").value
            var acomodativaMenos = document.getElementById("acomodativaMenos").value
            var arn = document.getElementById("arn").value
            var arp = document.getElementById("arp").value
            var retinoscopiaOD = document.getElementById("retinoscopiaOD").value
            var retinoscopiaOI = document.getElementById("retinoscopiaOI").value

            //Valoración vergencial
            var ppcor1 = document.getElementById("ppcor1").value
            var ppcor2 = document.getElementById("ppcor2").value
            var luzFiltro1 = document.getElementById("luzFiltro1").value
            var luzFiltro2 = document.getElementById("luzFiltro2").value
            var suaves = document.getElementById("suaves").value
            var pasos = document.getElementById("pasos").value
            var rfnVl = document.getElementById("rfnVl").value
            var rfpVl = document.getElementById("rfpVl").value
            var rfnVp = document.getElementById("rfnVp").value
            var rfpVp = document.getElementById("rfpVp").value
            var facilidadVergencia = document.getElementById("facilidadVergencia").value
            var vergenciaCpm = document.getElementById("vergenciaCpm").value
            var prismaBe = document.getElementById("prismaBe").value
            var bi = document.getElementById("bi").value

            //Valoración sensorial
            var worthVL = document.getElementById("worthVL").value
            var worthVP = document.getElementById("worthVP").value
            var bagolinni = document.getElementById("bagolinni").value
            var csaa = document.getElementById("csaa").value
            var csai = document.getElementById("csai").value
            var estereopsis = document.getElementById("estereopsis").value
            var test = document.getElementById("test").value
            var visionColorOD = document.getElementById("visionColorOD").value
            var visionColorOI = document.getElementById("visionColorOI").value
            var fijacionOD = document.getElementById("fijacionOD").value
            var fijacionOI = document.getElementById("fijacionOI").value

            //Diagnostico
            var c1 = document.getElementById("c1").value
            var c_1 = document.getElementById("c_1").value
            var c2 = document.getElementById("c2").value
            var c_2 = document.getElementById("c_2").value
            var c3 = document.getElementById("c3").value
            var c_3 = document.getElementById("c_3").value
            var codigoDigitado1 = document.getElementById("digitarCodigo1").value
            var codigoDigitado2 = document.getElementById("digitarCodigo2").value
            var codigoDigitado3 = document.getElementById("digitarCodigo3").value

            //Origen de la enfermedad
            var pacienteSano = document.getElementById("pacienteSano").value
            var enfermedadGeneralComun = document.getElementById("enfermedadGeneralComun").value
            var enfermedadProfesionalOcupacional = document.getElementById("enfermedadProfesionalOcupacional").value
            var accidenteTrabajo = document.getElementById("accidenteTrabajo").value
            var accidenteTrabajoFueraTrabajo = document.getElementById("accidenteTrabajoFueraTrabajo").value
            var numerosSesiones = document.getElementById("numerosSesiones").value
            var numeroSesionesMonocular = document.getElementById("numeroSesionesMonocular").value
            var numeroSesionesBiocular = document.getElementById("numeroSesionesBiocular").value
            var numeroSesionesBinocular = document.getElementById("numeroSesionesBinocular").value

            //Plan de tratamiento
            var planTratamientoDB = document.getElementById("planTratamientoDB").value

            //Remisiones
            var remisionesDB = document.getElementById("remisionesDB").value

            //Control
            var controlDB = document.getElementById("controlDB").value
            var estudiante = document.getElementById("estudiante").value
            var profesor = document.getElementById("profesor").value
            var noFactura = document.getElementById("noFactura").value
            var valorFactura = document.getElementById("valorFactura").value


            if (numeroIdentificacion.length != 0 && fecha.length != 0) {

                //Objeto datos personales
                var datosPersonales = {
                    Fecha: fecha,
                    Tipo_Identificacion: tipoIdentificacion,
                    Numero_Identificacion: numeroIdentificacion,
                    Apellidos: apellidos,
                    Nombres: nombres,
                    Genero: genero,
                    Fecha_Nacimiento: fechaNacimiento,
                    Edad: edad,
                    Procedencia: procedencia,
                    Ocupacion: ocupacion,
                    DireccionResidencia: direccionResidencia,
                    Barrio: barrio,
                    Telefono: telefono,
                    Localidad: localidad,
                    Codigo: codigo,
                    Zona: procedencia2,
                    Acompañante: acompañante,
                    Parentesco_Acompañante: parentesco2,
                    Telefono_Acompañante: telefono2,
                    Fecha_Ultimo_Control: fechaUltimoControl,
                    EPS: eps,
                    Tipo_afiliacion: tipoAfiliacion
                }

                //Objeto anamnesis
                var datosAnamnesis = {
                    Motivo_Consulta: motivoConsulta,
                    Antecedentes_Anamnesis: antecedentesAnamnesis,
                }

                //Objeto signos y síntomas
                var datosSignosSintomas = {
                    Cefalea: cefalea,
                    Astenopia_VL: astenopiaVL,
                    Problemas_Concentracion: problemasConcentracion,
                    Cabeceo: cabeceo,
                    Comprension_Lectura: comprensionLectura,
                    Cierre_Ojo: cierreOjo,
                    Posicion_Compensatoria_Cabeza: posicionCompensatoriaCabeza
                }

                //Objeto lensometría
                var datosLensometria = {
                    Esfera_OD: esferaOD,
                    Cilindro_OD: cilindroOD,
                    Eje_OD: ejeOD,
                    Adicion_OD: adicionOD,
                    AV_VL_OD: avvlOD,
                    AV_VP_OD: avvpOD,
                    Esfera_OI: esferaOI,
                    Cilindro_OI: cilindroOI,
                    Eje_OI: ejeOI,
                    Adicion_OI: adicionOI,
                    AV_VL_OI: avvlOI,
                    AV_VP_OI: avvpOI,
                    Tipo_Lente: tipoLente,
                    Filtro: filtro,
                    Tiempo_Uso: tiempoUso
                }

                //Objeto agudeza visual
                var datosAgudezaVisual = {
                    Test_Utilizado: testUtilizado,
                    Lejos_SC_OD: lejosSCOD,
                    Ph_SC_OD: phSCOD,
                    AO_SC_OD_OI: aoSCODOI,
                    Cerca_SC_OD: cercaSCOD,
                    AO_SC_OD_OI_2: aoSCODOI2,
                    Lejos_SC_OI: lejosSCOI,
                    Ph_SC_OI: phSCOI,
                    Cerca_SC_OI: cercaSCOI
                }

                //objeto motilidad ocular
                var datosMotilidadOcular = {
                    Hirchberg: hirchberg,
                    Kappa_OD: kappaOD,
                    Kappa_OI: kappaOI,
                    DuccionesOD: duccionesOD,
                    DuccionesOI: duccionesOI,
                    Versiones: versiones,
                }

                //Objeto alineamiento ocular
                var datosAlineamientoOcular = {
                    Cover_Test: coverTest,
                    Krimsky: krimsky,
                    White: white,
                    Seis_SC : seisSC,
                    Seis_CC: seisCC,
                    Seis_ADD: seisADD,
                    Cuarenta_SC: cuarentaSC,
                    Cuarenta_CC: cuarentaCC,
                    Cuarenta_ADD: cuarentaADD 
                }

                //Objeto cuadro medidas
                var datosCuadroMedidas = {
                    VL_1:vl1,
                    VL_2:vl2,
                    VL_3:vl3,
                    VL_4:vl4,
                    VL_5:vl5,
                    VL_6:vl6,
                    VL_7:vl7,
                    VL_8:vl8,
                    VL_9:vl9,
                    VP_1:vp1,
                    VP_2:vp2,
                    VP_3:vp3,
                    VP_4:vp4,
                    VP_5:vp5,
                    VP_6:vp6,
                    VP_7:vp7,
                    VP_8:vp8,
                    VP_9:vp9,
                }

                //Objeto acomodativa
                var datosAcomodativa = {
                    Aca_Calculado: acaCalculado,
                    Gradiente: gradiente,
                    Amplitud_OD: amplitudOD,
                    Flexibilidad_Cpm_OD: flexibilidadCpmOD,
                    Flexibilidad_Mas_OD: flexibilidadMasOD,
                    Flexibilidad_Menos_OD: flexibilidadMenosOD,
                    Aca: aca,
                    Amplitud_OI: amplitudOI,
                    Flexibilidad_Cpm_OI: flexibilidadCpmOI,
                    Flexibilidad_Mas_OI: flexibilidadMasOI,
                    Flexibilidad_Menos_OI: flexibilidadMenosOI,
                    Amplitud_Acomodacion: amplitudAcomodacion,
                    Facilidad_Acomodativa: facilidadAcomodativa,
                    Acomodativa_Mas: acomodativaMas,
                    Acomodativa_Menos: acomodativaMenos,
                    Arn: arn,
                    Arp: arp,
                    Retinoscopia_OD: retinoscopiaOD,
                    Retinoscopia_OI: retinoscopiaOI
                }

                //Objeto valoración general
                var datosValoracionGeneral = {
                    Ppcor_1: ppcor1,
                    Ppcor_2: ppcor2,
                    Luz_Filtro_1: luzFiltro1,
                    Luz_Filtro_2: luzFiltro2,
                    Suaves: suaves,
                    Pasos: pasos,
                    Rfn_Vl: rfnVl,
                    Rfp_Vl: rfpVl,
                    Rfn_Vp: rfnVp,
                    Rfp_Vp: rfpVp,
                    Facilidad_Vergencia: facilidadVergencia,
                    Vergencia_Cpm: vergenciaCpm,
                    Prisma_Be: prismaBe,
                    Bi: bi
                }

                //Objeto valoración sensorial
                var datosValoracionSensorial = {
                    Worth_VL: worthVL,
                    Worth_VP: worthVP,
                    Bagolinni: bagolinni,
                    Csaa: csaa,
                    Csai: csai,
                    Estereopsis: estereopsis,
                    Test: test,
                    Vision_Color_OD: visionColorOD,
                    Vision_Color_OI: visionColorOI,
                    Fijacion_OD: fijacionOD,
                    Fijacion_OI: fijacionOI
                }

                //Objeto diagnostico
                var datosDiagnostico = {
                    Codigo_Diagnostico_Principal: c1,
                    Diagnostico_Principal: c_1,
                    Codigo_Diagnostico_R1: c2,
                    Diagnostico_R1: c_2,
                    Codigo_Diagnostico_R2: c3,
                    Diagnostico_R2: c_3,
                    Codigo_Digitado1: codigoDigitado1,
                    Codigo_Digitado2: codigoDigitado2,
                    Codigo_Digitado3: codigoDigitado3,
                }

                //Objeto origen de la enfermedad
                var datosOrigenEnfermedad = {
                    Paciente_Sano: pacienteSano,
                    Enfermedad_General_Comun: enfermedadGeneralComun,
                    Enfermedad_Profesional_Ocupacional: enfermedadProfesionalOcupacional,
                    Accidente_Trabajo: accidenteTrabajo,
                    Accidente_Trabajo_Fuera_Trabajo: accidenteTrabajoFueraTrabajo,
                    Numeros_Sesiones: numerosSesiones,
                    Numero_Sesiones_Monocular: numeroSesionesMonocular,
                    Numero_Sesiones_Biocular: numeroSesionesBiocular,
                    Numero_Sesiones_Binocular: numeroSesionesBinocular
                }

                //Objeto plan tratamiento
                var datosPlanTratamiento = {
                    Plan_Tratamiento: planTratamientoDB
                }

                //Objeto Remisiones
                var datosRemisiones = {
                    Remisiones: remisionesDB
                }

                //Objeto Control
                var datosControl = {
                    Control: controlDB,
                    Estudiante: estudiante,
                    Profesor: profesor,
                    No_Factura: noFactura,
                    Valor_Factura: valorFactura
                }

                addDoc(collection(db, "Clinic_History_Ortoptica", "Data", "Data_Ortoptica"), {
                    DatosPersonales: datosPersonales,
                    DatosAnamnesis: datosAnamnesis,
                    DatosSignosSintomas: datosSignosSintomas,
                    DatosLensometria: datosLensometria,
                    DatosAgudezaVisual: datosAgudezaVisual,
                    DatosMotilidadOcular: datosMotilidadOcular,
                    DatosAlineamientoOcular: datosAlineamientoOcular,
                    DatosCuadroMedidas: datosCuadroMedidas,
                    DatosAcomodativa: datosAcomodativa,
                    DatosValoracionGeneral: datosValoracionGeneral,
                    DatosValoracionSensorial: datosValoracionSensorial,
                    DatosDiagnostico: datosDiagnostico,
                    DatosOrigenEnfermedad: datosOrigenEnfermedad,
                    DatosPlanTratamiento: datosPlanTratamiento,
                    DatosRemisiones: datosRemisiones,
                    DatosControl: datosControl,
                    Usuario: user.uid
                }).then(() => {
                    localStorage.setItem("Documento", numeroIdentificacion)
                    Swal.fire({
                        title: 'Certificados',
                        html: `
                            <div class="containerButton">
                                <label>Remisión:</label><a href="/views/certificates/remision.html" target="_blank"><button class="opt" id="re">Descargar</button></a>
                            </div>
                        `,
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        allowEnterKey: false,
                        stopKeydownPropagation: false
                    }).then((result) => {
                        if (result.isConfirmed) {
                            getDocs(collection(db, "Users", "User_id", "Private_Data")).
                                then((querySnapshot) => {
                                    querySnapshot.forEach((doc) => {
                                        if (doc.data().Id == uid) {
                                            if (doc.data().Rol == "Administrador") {
                                                location.href = "/views/home/homeAdmin.html"
                                            }
                                            else if (doc.data().Rol == "Estudiante") {
                                                location.href = "/views/home/homeStudent.html"
                                            }
                                            else if (doc.data().Rol == "Profesor") {
                                                location.href = "/views/home/homeTeacher.html"
                                            }
                                        }

                                    })
                                })
                        }
                    });
                })
            }
            else {
                Swal.fire({
                    title: "ERROR",
                    text: "Debes llenar todos los datos personales",
                    icon: "error"
                });

            }

        })

        exit.addEventListener('click', (e) => {
            e.preventDefault()
            getDocs(collection(db, "Users", "User_id", "Private_Data")).
                then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        if (doc.data().Id == uid) {
                            if (doc.data().Rol == "Administrador") {
                                location.href = "/views/home/homeAdmin.html"
                            }
                            else if (doc.data().Rol == "Estudiante") {
                                location.href = "/views/home/homeStudent.html"
                            }
                            else if (doc.data().Rol == "Profesor") {
                                location.href = "/views/home/homeTeacher.html"
                            }
                        }

                    })
                })
        })

        document.getElementById("numero").addEventListener('keydown', (event) => {
            var band = false
            if (event.key == "Enter") {
                // Hacer algo, tal vez deshacer
                getDocs(collection(db, "Clinic_History_Refraccion", "Data", "Data_Refraccion")).
                    then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            if (document.getElementById("numero").value == doc.data().DatosPersonales.Numero_Identificacion) {
                                band = true
                                document.getElementById("identificacion").value = doc.data().DatosPersonales.Tipo_Identificacion
                                document.getElementById("edad").value = doc.data().DatosPersonales.Edad
                                document.getElementById("apellidos").value = doc.data().DatosPersonales.Apellidos
                                document.getElementById("nombres").value = doc.data().DatosPersonales.Nombres
                                document.getElementById("genero").value = doc.data().DatosPersonales.Genero
                                document.getElementById("fechaNacimiento").value = doc.data().DatosPersonales.Fecha_Nacimiento
                                document.getElementById("procedencia").value = doc.data().DatosPersonales.Procedencia
                                document.getElementById("ocupacion").value = doc.data().DatosPersonales.Ocupacion
                                document.getElementById("direccionResidencia").value = doc.data().DatosPersonales.DireccionResidencia
                                document.getElementById("barrio").value = doc.data().DatosPersonales.Barrio
                                document.getElementById("telefono").value = doc.data().DatosPersonales.Telefono
                                document.getElementById("localidad").value = doc.data().DatosPersonales.Localidad
                                document.getElementById("codigo").value = doc.data().DatosPersonales.Codigo
                                document.getElementById("procedencia2").value = doc.data().DatosPersonales.Zona
                                document.getElementById("acompañante").value = doc.data().DatosPersonales.Acompañante
                                document.getElementById("parentesco2").value = doc.data().DatosPersonales.Parentesco_Acompañante
                                document.getElementById("telefono2").value = doc.data().DatosPersonales.Telefono_Acompañante
                                document.getElementById("fechaUltimoControl").value = doc.data().DatosPersonales.Fecha
                                document.getElementById("eps").value = doc.data().DatosPersonales.Eps
                                document.getElementById("tipoAfiliacion").value = doc.data().DatosPersonales.Tipo_Afiliacion
                            }
                        })
                    }).then(() => {
                        if (band == false) {
                            Swal.fire({
                                title: "ERROR",
                                text: "No se encontró ningún paciente con ese número de identificación",
                                icon: "error"
                            });
                        }
                    })
            }
        })

        getDocs(collection(db, "Users", "User_id", "Private_Data")).
            then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc.data().Rol == "Profesor") {
                        var teachers = document.getElementById("profesor")
                        var option = document.createElement('option')

                        teachers.appendChild(option)

                        option.value = doc.data().Nombre
                        option.textContent = doc.data().Nombre
                    }
                })
            })

    }
    else {
        Swal.fire({
            title: 'No hay usuarios logueados',
            icon: 'error',
            confirmButtonColor: '#d33',
            confirmButtonText: 'Ok',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: false
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/index.html";
            }
        });
    }
});