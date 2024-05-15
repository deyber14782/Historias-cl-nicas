//Códigos
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


// Código 1
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

// Código 2
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

// Código 3
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


//Seleccion de otro

document.addEventListener('selectionchange', e => {
    if (document.getElementById("antecedentesPersonalesSistemicos").value == "Otro") {
        var otro1 = document.getElementById("otro1")

        otro1.style.visibility = "visible"
    }
    else {
        var otro1 = document.getElementById("otro1")
        otro1.style.visibility = "hidden"
    }
})

document.addEventListener('selectionchange', e => {
    if (document.getElementById("antecedentesPersonalesOculares").value == "Otro") {
        var otro2 = document.getElementById("otro2")

        otro2.style.visibility = "visible"
    }
    else {
        var otro2 = document.getElementById("otro2")
        otro2.style.visibility = "hidden"
    }
})

//Suma de las distancias NP
document.addEventListener('keyup', e => {

    document.getElementById("distanciaPupilar").value = parseInt(document.getElementById("distanciaNPDerecha").value) + parseInt(document.getElementById("distanciaNPIzquierda").value)

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
            var no_h_c = document.getElementById("no_h_c").value
            var horaEntrada = document.getElementById("horaEntrada").value
            var tipoIdentificacion = document.getElementById("identificacion").value
            var numeroIdentificacion = document.getElementById("numero").value
            var edad = document.getElementById("edad").value
            var apellidos = document.getElementById("apellidos").value
            var nombres = document.getElementById("nombres").value
            var genero = document.getElementById("genero").value
            var fechaNacimiento = document.getElementById("fechaNacimiento").value
            var procedencia = document.getElementById("procedencia").value
            var ocupacion = document.getElementById("ocupacion").value
            var direccionResidencia = document.getElementById("direccionResidencia").value
            var barrio = document.getElementById("barrio").value
            var telefono = document.getElementById("telefono").value
            var localidad = document.getElementById("localidad").value
            var codigo = document.getElementById("codigo").value
            var procedencia2 = document.getElementById("procedencia2").value
            var remitidoPor = document.getElementById("remitidoPor").value
            var tipoVinculacion = document.getElementById("tipoVinculacion").value
            var responsable = document.getElementById("responsable").value
            var parentesco = document.getElementById("parentesco").value
            var celular = document.getElementById("celular").value
            var acompañante = document.getElementById("acompañante").value
            var parentesco2 = document.getElementById("parentesco2").value
            var direccionResidencia2 = document.getElementById("direccionResidencia").value
            var barrio2 = document.getElementById("barrio2").value
            var telefono2 = document.getElementById("telefono2").value
            var eps = document.getElementById("eps").value
            var tipoAfiliacion = document.getElementById("tipoAfiliacion").value

            //Anamnesis
            var motivoConsulta = document.getElementById("motivoConsulta").value
            var anamnesis = document.getElementById("anamnesisDB").value
            var antecedentesPersonalesSistemicos = document.getElementById("antecedentesPersonalesSistemicos").value
            var antecedentesPersonalesOculares = document.getElementById("antecedentesPersonalesOculares").value
            var antecedentesFamiliares = document.getElementById("antecedentesFamiliares").value

            //Lensometría
            var tipoLente = document.getElementById("tipoLente").value
            var visionLejanaEsferaOD = document.getElementById("visionLejanaEsferaOD").value
            var visionLejanaCilindroOD = document.getElementById("visionLejanaCilindroOD").value
            var visionLejanaEjeOD = document.getElementById("visionLejanaEjeOD").value
            var visionProximaEsferaOD = document.getElementById("visionProximaEsferaOD").value
            var visionProximaCilindroOD = document.getElementById("visionProximaCilindroOD").value
            var visionProximaEjeOD = document.getElementById("visionProximaEjeOD").value
            var filtro = document.getElementById("filtro").value
            var visionLejanaEsferaOI = document.getElementById("visionLejanaEsferaOI").value
            var visionLejanaCilindroOI = document.getElementById("visionLejanaCilindroOI").value
            var visionLejanaEjeOI = document.getElementById("visionLejanaEjeOI").value
            var visionProximaEsferaOI = document.getElementById("visionProximaEsferaOI").value
            var visionProximaCilindroOI = document.getElementById("visionProximaCilindroOI").value
            var visionProximaEjeOI = document.getElementById("visionProximaEjeOI").value
            var dosPares = document.getElementById("dosPares").value
            var visionLejanaEsferaADD = document.getElementById("visionLejanaEsferaADD").value
            var visionLejanaCilindroADD = document.getElementById("visionLejanaCilindroADD").value
            var visionLejanaEjeADD = document.getElementById("visionLejanaEjeADD").value
            var visionProximaEsferaADD = document.getElementById("visionProximaEsferaADD").value
            var visionProximaCilindroADD = document.getElementById("visionProximaCilindroADD").value
            var visionProximaEjeADD = document.getElementById("visionProximaEjeADD").value
            var observaciones = document.getElementById("observaciones").value

            //Agudeza visual
            var cartillaUtilizada = document.getElementById("cartillaUtilizada").value
            var distancia = document.getElementById("distancia").value
            var visionLejanaSinCorreccionOD = document.getElementById("visionLejanaSinCorreccionOD").value
            var visionLejanaConCorreccionOD = document.getElementById("visionLejanaConCorreccionOD").value
            var visionEstenopeicoSinCorreccionOD = document.getElementById("visionEstenopeicoSinCorreccionOD").value
            var visionEstenopeicoConCorreccionOD = document.getElementById("visionEstenopeicoConCorreccionOD").value
            var visionCercanaSinCorreccionOD = document.getElementById("visionCercanaSinCorreccionOD").value
            var visionCercanaConCorreccionOD = document.getElementById("visionCercanaConCorreccionOD").value
            var visionLejanaSinCorreccionOI = document.getElementById("visionLejanaSinCorreccionOI").value
            var visionLejanaConCorreccionOI = document.getElementById("visionLejanaConCorreccionOI").value
            var visionEstenopeicoSinCorreccionOI = document.getElementById("visionEstenopeicoSinCorreccionOI").value
            var visionEstenopeicoConCorreccionOI = document.getElementById("visionEstenopeicoConCorreccionOI").value
            var visionCercanaSinCorreccionOI = document.getElementById("visionCercanaSinCorreccionOI").value
            var visionCercanaConCorreccionOI = document.getElementById("visionCercanaConCorreccionOI").value
            var visionLejanaSinCorreccionAO = document.getElementById("visionLejanaSinCorreccionAO").value
            var visionLejanaConCorreccionAO = document.getElementById("visionLejanaConCorreccionAO").value
            var visionEstenopeicoSinCorreccionAO = document.getElementById("visionEstenopeicoSinCorreccionAO").value
            var visionEstenopeicoConCorreccionAO = document.getElementById("visionEstenopeicoConCorreccionAO").value
            var visionCercanaSinCorreccionAO = document.getElementById("visionCercanaSinCorreccionAO").value
            var visionCercanaConCorreccionAO = document.getElementById("visionCercanaConCorreccionAO").value
            var distanciaPupilar = document.getElementById("distanciaPupilar").value
            var distanciaNPDerecha = document.getElementById("distanciaNPDerecha").value
            var distanciaNPIzquierda = document.getElementById("distanciaNPIzquierda").value
            var ojoDominante = document.getElementById("ojoDominante").value

            //Examen externo
            var examenExternoOD = document.getElementById("examenExternoOD").value
            var examenExternoOI = document.getElementById("examenExternoOI").value

            //Biomicroscopia
            var descripcionBiomicroscopiaOD = document.getElementById("descripcionBiomicroscopiaOD").value
            var descripcionBiomicroscopiaOI = document.getElementById("descripcionBiomicroscopiaOI").value

            //Motilidad ocular
            var hirchberg = document.getElementById("hirchberg").value
            var kappaOD = document.getElementById("kappaOD").value
            var kappaOI = document.getElementById("kappaOI").value
            var duccionesOD = document.getElementById("duccionesOD").value
            var duccionesOI = document.getElementById("duccionesOI").value
            var versiones = document.getElementById("versiones").value
            var ppcObjetoReal = document.getElementById("ppcObjetoReal").value
            var luz = document.getElementById("luz").value
            var luzFiltroRojo = document.getElementById("luzFiltroRojo").value

            //Reflejos pupilares
            var reflejosPupilares = document.getElementById("reflejosPupilaresDB").value

            //Medida de la desviación habitual
            var tipoDeTestCoverTestVL6m = document.getElementById("tipoDeTestCoverTestVL6m").value
            var vpHabitual = document.getElementById("vpHabitual").value
            var desviacionCM = document.getElementById("desviacionCM").value

            //Oftalmoscopia
            var directa = document.getElementById("directa").value
            var indirectaTécnica = document.getElementById("indirectaTecnica").value
            var relAV = document.getElementById("relAV").value
            var excDisco = document.getElementById("excDisco").value
            var macula = document.getElementById("macula").value
            var fijacion = document.getElementById("fijacion").value
            var relAV2 = document.getElementById("relAV2").value
            var excDisco2 = document.getElementById("excDisco2").value
            var macula2 = document.getElementById("macula2").value
            var fijacion2 = document.getElementById("fijacion2").value

            //Queratometría
            var queratometriaOD = document.getElementById("queratometriaOD").value
            var queratometriaAstigmatismoCornealOD = document.getElementById("queratometriaAstigmatismoCornealOD").value
            var queratometriaMirasOD = document.getElementById("queratometriaMirasOD").value
            var queratometriaOI = document.getElementById("queratometriaOI").value
            var queratometriaAstigmatismoCornealOI = document.getElementById("queratometriaAstigmatismoCornealOI").value
            var queratometriaMirasOI = document.getElementById("queratometriaMirasOI").value

            //Retinoscopia estática
            var estaticaEsferaOD = document.getElementById("estaticaEsferaOD").value
            var estaticaCilindroOD = document.getElementById("estaticaCilindroOD").value
            var estaticaEjeOD = document.getElementById("estaticaEjeOD").value
            var estaticaAdicionOD = document.getElementById("estaticaAdicionOD").value
            var estaticaEsferaOI = document.getElementById("estaticaEsferaOI").value
            var estaticaCilindroOI = document.getElementById("estaticaCilindroOI").value
            var estaticaEjeOI = document.getElementById("estaticaEjeOI").value
            var estaticaAdicionOI = document.getElementById("estaticaAdicionOI").value

            //Retinoscopia dinámica
            var dinamicaEsferaOD = document.getElementById("dinamicaEsferaOD").value
            var dinamicaCilindroOD = document.getElementById("dinamicaCilindroOD").value
            var dinamicaEjeOD = document.getElementById("dinamicaEjeOD").value
            var dinamicaAdicionOD = document.getElementById("dinamicaAdicionOD").value
            var dinamicaEsferaOI = document.getElementById("dinamicaEsferaOI").value
            var dinamicaCilindroOI = document.getElementById("dinamicaCilindroOI").value
            var dinamicaEjeOI = document.getElementById("dinamicaEjeOI").value
            var dinamicaAdicionOI = document.getElementById("dinamicaAdicionOI").value

            //Retinoscopia ciclopejia
            var tipoMedicamento = document.getElementById("tipoMedicamento").value
            var dosis = document.getElementById("dosis").value
            var ciclopejiaEsferaOD = document.getElementById("ciclopejiaEsferaOD").value
            var ciclopejiaCilindroOD = document.getElementById("ciclopejiaCilindroOD").value
            var ciclopejiaEjeOD = document.getElementById("ciclopejiaEjeOD").value
            var ciclopejiaAdicionOD = document.getElementById("ciclopejiaAdicionOD").value
            var ciclopejiaEsferaOI = document.getElementById("ciclopejiaEsferaOI").value
            var ciclopejiaCilindroOI = document.getElementById("ciclopejiaCilindroOI").value
            var ciclopejiaEjeOI = document.getElementById("ciclopejiaEjeOI").value
            var ciclopejiaAdicionOI = document.getElementById("ciclopejiaAdicionOI").value

            //Examen subjetivo
            var examenEsferaOD = document.getElementById("examenEsferaOD").value
            var examenCilindroOD = document.getElementById("examenCilindroOD").value
            var examenEjeOD = document.getElementById("examenEjeOD").value
            var examenAdicionOD = document.getElementById("examenAdicionOD").value
            var examenEsferaOI = document.getElementById("examenEsferaOI").value
            var examenCilindroOI = document.getElementById("examenCilindroOI").value
            var examenEjeOI = document.getElementById("examenEjeOI").value
            var examenAdicionOI = document.getElementById("examenAdicionOI").value

            //Observaciones
            var observacionesDB = document.getElementById("observacionesDB").value

            //Afinación VL y Y VP
            var tecnicaVL = document.getElementById("tecnicaVL").value
            var vp = document.getElementById("vp").value
            var afinacionEsferaOD = document.getElementById("afinacionEsferaOD").value
            var afinacionCilindroOD = document.getElementById("afinacionCilindroOD").value
            var afinacionEjeOD = document.getElementById("afinacionEjeOD").value
            var afinacionAdicionOD = document.getElementById("afinacionAdicionOD").value
            var afinacionEsferaOI = document.getElementById("afinacionEsferaOI").value
            var afinacionCilindroOI = document.getElementById("afinacionCilindroOI").value
            var afinacionEjeOI = document.getElementById("afinacionEjeOI").value
            var afinacionAdicionOI = document.getElementById("afinacionAdicionOI").value


            //Medida de la desviación inducida
            var tipoTest = document.getElementById("tipoTest").value
            var mDesviacionInducida = document.getElementById("mDesviacionInducida").value
            var vpDesviacionInducida = document.getElementById("vpDesviacionInducida").value
            var cmDesviacionInducida = document.getElementById("cmDesviacionInducida").value

            //Flexibilidad de acomodación monocular
            var masOD = document.getElementById("masOD").value
            var menosOD = document.getElementById("menosOD").value
            var cpmOD = document.getElementById("cpmOD").value
            var masOI = document.getElementById("masOI").value
            var menosOI = document.getElementById("menosOI").value
            var cpmOI = document.getElementById("cpmOI").value

            //Estereopsis
            var estereopsisInput1 = document.getElementById("estereopsisInput1").value
            var estereopsisInput2 = document.getElementById("estereopsisInput2").value

            //Visión cromática
            var testVisionCromatica = document.getElementById("testVisionCromatica").value
            var visionCromaticaOD = document.getElementById("visionCromaticaOD").value
            var visionCromaticaOI = document.getElementById("visionCromaticaOI").value

            //Prescripción óptica
            var esferaOD = document.getElementById("esferaOD").value
            var cilindroOD = document.getElementById("cilindroOD").value
            var ejeOD = document.getElementById("ejeOD").value
            var avOD = document.getElementById("avOD").value
            var addOD = document.getElementById("addOD").value
            var esferaOI = document.getElementById("esferaOI").value
            var cilindroOI = document.getElementById("cilindroOI").value
            var ejeOI = document.getElementById("ejeOI").value
            var avOI = document.getElementById("avOI").value
            var addOI = document.getElementById("addOI").value
            var tipoLente2 = document.getElementById("tipoLente2").value
            var filtro2 = document.getElementById("filtro2").value
            var material2 = document.getElementById("material2").value

            //DNP
            var dnpOD = document.getElementById("dnpOD").value
            var dnpOI = document.getElementById("dnpOI").value

            //Prescripción medicamentosa
            var dci0 = document.getElementById("dci0").value
            var concentracion0 = document.getElementById("concentracion0").value
            var formaFarmaceutica0 = document.getElementById("formaFarmaceutica0").value
            var cantidad0 = document.getElementById("cantidad0").value
            var dci1 = document.getElementById("dci1").value
            var concentracion1 = document.getElementById("concentracion1").value
            var formaFarmaceutica1 = document.getElementById("formaFarmaceutica1").value
            var cantidad1 = document.getElementById("cantidad1").value
            var dci3 = document.getElementById("dci3").value
            var concentracion3 = document.getElementById("concentracion3").value
            var formaFarmaceutica3 = document.getElementById("formaFarmaceutica3").value
            var cantidad3 = document.getElementById("cantidad3").value
            var c1 = document.getElementById("c1").value
            var c_1 = document.getElementById("c_1").value
            var c2 = document.getElementById("c2").value
            var c_2 = document.getElementById("c_2").value
            var c3 = document.getElementById("c3").value
            var c_3 = document.getElementById("c_3").value
            var codigoDigitado1 = document.getElementById("digitarCodigo1").value
            var codigoDigitado2 = document.getElementById("digitarCodigo2").value
            var codigoDigitado3 = document.getElementById("digitarCodigo3").value
            var origenEnfermedad = document.getElementById("origenEnfermedad").value

            //Recomendacón de uso
            var recomendacion = document.getElementById("recomendacionesUso").value

            //Conducta
            var conductaDB = document.getElementById("conductaDB").value
            var controlDB = document.getElementById("controlDB").value

            //Remisiones
            var remisionesDB = document.getElementById("remisionesDB").value
            var horaSalida = document.getElementById("horaSalida").value
            var estudiante = document.getElementById("estudiante").value
            var profesor = document.getElementById("profesor").value
            var noFactura = document.getElementById("noFactura").value
            var valorFactura = document.getElementById("valorFactura").value

            if (numeroIdentificacion.length != 0) {
                //Objeto datos personales
                var datosPersonales = {
                    Fecha: fecha,
                    No_H_C: no_h_c,
                    Hora_Entrada: horaEntrada,
                    Tipo_Identificacion: tipoIdentificacion,
                    Numero_Identificacion: numeroIdentificacion,
                    Edad: edad,
                    Apellidos: apellidos,
                    Nombres: nombres,
                    Genero: genero,
                    Fecha_Nacimiento: fechaNacimiento,
                    Procedencia: procedencia,
                    Ocupacion: ocupacion,
                    DireccionResidencia: direccionResidencia,
                    Barrio: barrio,
                    Telefono: telefono,
                    Localidad: localidad,
                    Codigo: codigo,
                    Zona: procedencia2,
                    Remitido_Por: remitidoPor,
                    Tipo_Vinculacion: tipoVinculacion,
                    Responsable: responsable,
                    Parentesco_Responsable: parentesco,
                    Celular_Responsable: celular,
                    Acompañante: acompañante,
                    Parentesco_Acompañante: parentesco2,
                    DireccionResidencia_Acompañante: direccionResidencia2,
                    Barrio_Acompañante: barrio2,
                    Telefono_Acompañante: telefono2,
                    Eps: eps,
                    Tipo_Afiliacion: tipoAfiliacion
                }

                //Objeto anamnesis
                if (antecedentesPersonalesSistemicos == "Otro") {
                    var otro1 = document.getElementById("otro1").value

                    var datosAnamnesis = {
                        Motivo_Consulta: motivoConsulta,
                        Anamnesis: anamnesis,
                        Antecedentes_Personales_Sistemicos: otro1,
                        Antecedentes_Personales_Oculares: antecedentesPersonalesOculares,
                        Antecedentes_Familiares: antecedentesFamiliares
                    }
                }

                if (antecedentesPersonalesOculares == "Otro") {
                    var otro2 = document.getElementById("otro2").value

                    var datosAnamnesis = {
                        Motivo_Consulta: motivoConsulta,
                        Anamnesis: anamnesis,
                        Antecedentes_Personales_Sistemicos: antecedentesPersonalesSistemicos,
                        Antecedentes_Personales_Oculares: otro2,
                        Antecedentes_Familiares: antecedentesFamiliares
                    }
                }

                if (antecedentesPersonalesSistemicos == "Otro" && antecedentesPersonalesOculares == "Otro") {
                    var otro1 = document.getElementById("otro1").value
                    var otro2 = document.getElementById("otro2").value
                    var datosAnamnesis = {
                        Motivo_Consulta: motivoConsulta,
                        Anamnesis: anamnesis,
                        Antecedentes_Personales_Sistemicos: otro1,
                        Antecedentes_Personales_Oculares: otro2,
                        Antecedentes_Familiares: antecedentesFamiliares
                    }
                }

                if (antecedentesPersonalesSistemicos != "Otro" && antecedentesPersonalesOculares != "Otro") {
                    var datosAnamnesis = {
                        Motivo_Consulta: motivoConsulta,
                        Anamnesis: anamnesis,
                        Antecedentes_Personales_Sistemicos: antecedentesPersonalesSistemicos,
                        Antecedentes_Personales_Oculares: antecedentesPersonalesOculares,
                        Antecedentes_Familiares: antecedentesFamiliares
                    }
                }

                //Objeto lensometría
                var datosLensometria = {
                    Tipo_Lente: tipoLente,
                    Vision_Lejana_Esfera_OD: visionLejanaEsferaOD,
                    Vision_Lejana_Cilindro_OD: visionLejanaCilindroOD,
                    Vision_Lejana_Eje_OD: visionLejanaEjeOD,
                    Vision_Proxima_Esfera_OD: visionProximaEsferaOD,
                    Vision_Proxima_Cilindro_OD: visionProximaCilindroOD,
                    Vision_Proxima_Eje_OD: visionProximaEjeOD,
                    Filtro: filtro,
                    Vision_Lejana_Esfera_OI: visionLejanaEsferaOI,
                    Vision_Lejana_Cilindro_OI: visionLejanaCilindroOI,
                    Vision_Lejana_Eje_OI: visionLejanaEjeOI,
                    Vision_Proxima_Esfera_OI: visionProximaEsferaOI,
                    Vision_Proxima_Cilindro_OI: visionProximaCilindroOI,
                    Vision_Proxima_Eje_OI: visionProximaEjeOI,
                    Dos_Pares: dosPares,
                    Vision_Lejana_Esfera_ADD: visionLejanaEsferaADD,
                    Vision_Lejana_Cilindro_ADD: visionLejanaCilindroADD,
                    Vision_Lejana_Eje_ADD: visionLejanaEjeADD,
                    Vision_Proxima_Esfera_ADD: visionProximaEsferaADD,
                    Vision_Proxima_Cilindro_ADD: visionProximaCilindroADD,
                    Vision_Proxima_Eje_ADD: visionProximaEjeADD,
                    Observaciones: observaciones

                }

                //Objeto agudeza visual
                var datosAgudezaVisual = {
                    Cartilla_utilizada: cartillaUtilizada,
                    Distancia: distancia,
                    Vision_Lejana_Sin_Correcion_OD: visionLejanaSinCorreccionOD,
                    Vision_Lejana_Con_Correcion_OD: visionLejanaConCorreccionOD,
                    Vision_Estenopeico_Sin_Correcion_OD: visionEstenopeicoSinCorreccionOD,
                    Vision_Estenopeico_Con_Correcion_OD: visionEstenopeicoConCorreccionOD,
                    Vision_Cercana_Sin_Correcion_OD: visionCercanaSinCorreccionOD,
                    Vision_Cercana_Con_Correcion_OD: visionCercanaConCorreccionOD,
                    Vision_Lejana_Sin_Correcion_OI: visionLejanaSinCorreccionOI,
                    Vision_Lejana_Con_Correcion_OI: visionLejanaConCorreccionOI,
                    Vision_Estenopeico_Sin_Correcion_OI: visionEstenopeicoSinCorreccionOI,
                    Vision_Estenopeico_Con_Correcion_OI: visionEstenopeicoConCorreccionOI,
                    Vision_Cercana_Sin_Correcion_OI: visionCercanaSinCorreccionOI,
                    Vision_Cercana_Con_Correcion_OI: visionCercanaConCorreccionOI,
                    Vision_Lejana_Sin_Correcion_AO: visionLejanaSinCorreccionAO,
                    Vision_Lejana_Con_Correcion_AO: visionLejanaConCorreccionAO,
                    Vision_Estenopeico_Sin_Correcion_AO: visionEstenopeicoSinCorreccionAO,
                    Vision_Estenopeico_Con_Correcion_AO: visionEstenopeicoConCorreccionAO,
                    Vision_Cercana_Sin_Correcion_AO: visionCercanaSinCorreccionAO,
                    Vision_Cercana_Con_Correcion_AO: visionCercanaConCorreccionAO,
                    Distancia_Pupilar: distanciaPupilar,
                    Distancia_NP_Derecha: distanciaNPDerecha,
                    Distancia_NP_Izquierda: distanciaNPIzquierda,
                    Ojo_Dominante: ojoDominante

                }

                //Objeto examen externo
                var datosExamenExterno = {
                    Examen_Externo_OD: examenExternoOD,
                    Examen_Externo_OI: examenExternoOI
                }

                //Objeto biomicroscopia
                var datosBiomicroscopia = {
                    Descripcion_Biomicroscopia_OD: descripcionBiomicroscopiaOD,
                    Descripcion_Biomicroscopia_OI: descripcionBiomicroscopiaOI
                }

                //objeto motilidad ocular
                var datosMotilidadOcular = {
                    Hirchberg: hirchberg,
                    Kappa_OD: kappaOD,
                    Kappa_OI: kappaOI,
                    DuccionesOD: duccionesOD,
                    DuccionesOI: duccionesOI,
                    Versiones: versiones,
                    PPC_Objeto_Real: ppcObjetoReal,
                    Luz: luz,
                    Luz_Filtro_Rojo: luzFiltroRojo

                }

                //objeto reflejos pupilares
                var datosReflejosPupilares = {
                    Reflejos_Pupilares: reflejosPupilares
                }

                //objeto medida de la desviación habitual
                var datosMedidaDesviacionHabitual = {
                    Tipo_De_Test_Cover_Test_VL_6m: tipoDeTestCoverTestVL6m,
                    Vp_Habitual: vpHabitual,
                    Desviacion_Cm: desviacionCM,
                }

                //objeto oftalmoscopia
                var datosOftalmoscopia = {
                    Directa: directa,
                    Indirecta_Tecnica: indirectaTécnica,
                    Rel_AV: relAV,
                    Exc_Disco: excDisco,
                    Macula: macula,
                    Fijacion: fijacion,
                    Rel_AV2: relAV2,
                    Exc_Disco2: excDisco2,
                    Macula2: macula2,
                    Fijacion2: fijacion2
                }

                //objeto queratometria
                var datosQueratometria = {
                    Queratometria_OD: queratometriaOD,
                    Queratometria_Astigmatismo_Corneal_OD: queratometriaAstigmatismoCornealOD,
                    Queratometria_Miras_OD: queratometriaMirasOD,
                    Queratometria_OI: queratometriaOI,
                    Queratometria_Astigmatismo_Corneal_OI: queratometriaAstigmatismoCornealOI,
                    Queratometria_Miras_OI: queratometriaMirasOI,
                }

                //objeto retinoscopia estatica
                var datosRetinoscopiaEstatica = {
                    Estatica_Esfera_OD: estaticaEsferaOD,
                    Estatica_Cilindro_OD: estaticaCilindroOD,
                    Estatica_Eje_OD: estaticaEjeOD,
                    Estatica_Adicion_OD: estaticaAdicionOD,
                    Estatica_Esfera_OI: estaticaEsferaOI,
                    Estatica_Cilindro_OI: estaticaCilindroOI,
                    Estatica_Eje_OI: estaticaEjeOI,
                    Estatica_Adicion_OI: estaticaAdicionOI
                }

                //objeto retinoscopia dinamica
                var datosRetinoscopiaDinamica = {
                    Dinamica_Esfera_OD: dinamicaEsferaOD,
                    Dinamica_Cilindro_OD: dinamicaCilindroOD,
                    Dinamica_Eje_OD: dinamicaEjeOD,
                    Dinamica_Adicion_OD: dinamicaAdicionOD,
                    Dinamica_Esfera_OI: dinamicaEsferaOI,
                    Dinamica_Cilindro_OI: dinamicaCilindroOI,
                    Dinamica_Eje_OI: dinamicaEjeOI,
                    Dinamica_Adicion_OI: dinamicaAdicionOI
                }

                // objeto retinoscopia ciclopejia
                var datosRetinoscopiaCiclopejia = {
                    Tipo_medicamento: tipoMedicamento,
                    Dosis: dosis,
                    Ciclopejia_Esfera_OD: ciclopejiaEsferaOD,
                    Ciclopejia_Cilindro_OD: ciclopejiaCilindroOD,
                    Ciclopejia_Eje_OD: ciclopejiaEjeOD,
                    Ciclopejia_Adicion_OD: ciclopejiaAdicionOD,
                    Ciclopejia_Esfera_OI: ciclopejiaEsferaOI,
                    Ciclopejia_Cilindro_OI: ciclopejiaCilindroOI,
                    Ciclopejia_Eje_OI: ciclopejiaEjeOI,
                    Ciclopejia_Adicion_OI: ciclopejiaAdicionOI
                }

                //Objeto exmen subjetivo
                var datosExamenSubjetivo = {
                    Examen_Esfera_OD: examenEsferaOD,
                    Examen_Cilindro_OD: examenCilindroOD,
                    Examen_Eje_OD: examenEjeOD,
                    Examen_Adicion_OD: examenAdicionOD,
                    Examen_Esfera_OI: examenEsferaOI,
                    Examen_Cilindro_OI: examenCilindroOI,
                    Examen_Eje_OI: examenEjeOI,
                    Examen_Adicion_OI: examenAdicionOI
                }

                //Objeto observaciones
                var datosObservaciones = {
                    Observaciones: observacionesDB,
                }

                //Objeto afinación VL y Y VP
                var datosAfinacionVLVP = {
                    Tecnica_VL: tecnicaVL,
                    VP: vp,
                    Afinacion_Esfera_OD: afinacionEsferaOD,
                    Afinacion_Cilindro_OD: afinacionCilindroOD,
                    Afinacion_Eje_OD: afinacionEjeOD,
                    Afinacion_Adicion_OD: afinacionAdicionOD,
                    Afinacion_Esfera_OI: afinacionEsferaOI,
                    Afinacion_Cilindro_OI: afinacionCilindroOI,
                    Afinacion_Eje_OI: afinacionEjeOI,
                    Afinacion_Adicion_OI: afinacionAdicionOI

                }

                //Objeto medida de la desviación inducida
                var datosMedidaDesviacionInducida = {
                    Tipo_Test: tipoTest,
                    m_DesviacionInducida: mDesviacionInducida,
                    VP_Desviacion_Inducida: vpDesviacionInducida,
                    Cm_Desviacion_Inducida: cmDesviacionInducida
                }

                //Objeto flexibilidad de acomodación monocular
                var datosFlexibilidadAcomodacionMonocular = {
                    Mas_OD: masOD,
                    Menos_OD: menosOD,
                    cpm_OD: cpmOD,
                    Mas_OI: masOI,
                    Menos_OI: menosOI,
                    cpm_OI: cpmOI
                }

                //Objeto estereopsis
                var datosEstereopsis = {
                    Test_Estereopsis_Input_1: estereopsisInput1,
                    Test_Estereopsis_Input_2: estereopsisInput2,
                }

                //Objeto visión cromática
                var datosVisionCromatica = {
                    Test_Vision_Cromatica: testVisionCromatica,
                    Vision_Cromatica_OD: visionCromaticaOD,
                    Vision_Cromatica_OI: visionCromaticaOI
                }

                //Objeto prescripión óptica
                var datosPrescripcionOptica = {
                    Esfera_OD: esferaOD,
                    Cilindro_OD: cilindroOD,
                    Eje_OD: ejeOD,
                    AV_OD: avOD,
                    ADD_OD: addOD,
                    Esfera_OI: esferaOI,
                    Cilindro_OI: cilindroOI,
                    Eje_OI: ejeOI,
                    AV_OI: avOI,
                    ADD_OI: addOI,
                    Tipo_Lente: tipoLente2,
                    Filtro: filtro2,
                    Material: material2
                }

                //Objeto DNP
                var datosDNP = {
                    DNP_OD: dnpOD,
                    DNP_OI: dnpOI
                }

                //Objeto prescripción medicamentosa
                var datosPrescripcionMedicamentosa = {
                    DCI_1: dci0,
                    Concentracion_1: concentracion0,
                    Forma_Farmaceutica_1: formaFarmaceutica0,
                    Cantidad_1: cantidad0,
                    DCI_2: dci1,
                    Concentracion_2: concentracion1,
                    Forma_Farmaceutica_2: formaFarmaceutica1,
                    Cantidad_2: cantidad1,
                    DCI_3: dci3,
                    Concentracion_3: concentracion3,
                    Forma_Farmaceutica_3: formaFarmaceutica3,
                    Cantidad_3: cantidad3,
                    Codigo_Diagnostico_Principal: c1,
                    Diagnostico_Principal: c_1,
                    Codigo_Diagnostico_R1: c2,
                    Diagnostico_R1: c_2,
                    Codigo_Diagnostico_R2: c3,
                    Diagnostico_R2: c_3,
                    Codigo_Digitado1: codigoDigitado1,
                    Codigo_Digitado2: codigoDigitado2,
                    Codigo_Digitado3: codigoDigitado3,
                    Origen_Enfermedad: origenEnfermedad,
                }

                //Objeto recomendación de uso
                var datosRecomendacionUso = {
                    Recomendacion: recomendacion
                }

                //Objeto conducta
                var datosConducta = {
                    Conducta: conductaDB,
                    Control: controlDB
                }

                //Objeto Remisiones
                var datosRemisiones = {
                    Remisiones: remisionesDB,
                    Hora_Salida: horaSalida,
                    Estudiante: estudiante,
                    Profesor: profesor,
                    No_Factura: noFactura,
                    Valor_Factura: valorFactura
                }

                var band = false
                getDocs(collection(db, "Clinic_History_Refraccion", "Data", "Data_Refraccion")).
                    then((querySnapshot) => {
                        querySnapshot.forEach((doc2) => {
                            if (doc2.data().DatosPersonales.Numero_Identificacion == numeroIdentificacion) {
                                band = true
                                Swal.fire({
                                    title: 'El paciente ya cuenta con un registro',
                                    icon: 'warning',
                                    confirmButtonColor: '#d33',
                                    confirmButtonText: 'Ok',
                                })
                            }
                        })
                    }).then(() => {
                        if (band == false) {
                            addDoc(collection(db, "Clinic_History_Refraccion", "Data", "Data_Refraccion"), {
                                DatosPersonales: datosPersonales,
                                DatosAnamnesis: datosAnamnesis,
                                DatosLensometria: datosLensometria,
                                DatosAgudezaVisual: datosAgudezaVisual,
                                DatosExamenExterno: datosExamenExterno,
                                DatosBiomicroscopia: datosBiomicroscopia,
                                DatosMotilidadOcular: datosMotilidadOcular,
                                Datos_Reflejos_Pupilares: datosReflejosPupilares,
                                DatosMedidaDesviacionHabitual: datosMedidaDesviacionHabitual,
                                DatosOftalmoscopia: datosOftalmoscopia,
                                DatosQueratometria: datosQueratometria,
                                DatosRetinoscopiaEstatica: datosRetinoscopiaEstatica,
                                DatosRetinoscopiaDinamica: datosRetinoscopiaDinamica,
                                DatosRetinoscopiaCiclopejia: datosRetinoscopiaCiclopejia,
                                DatosExamenSubjetivo: datosExamenSubjetivo,
                                DatosObservaciones: datosObservaciones,
                                DatosAfinacionVLVP: datosAfinacionVLVP,
                                DatosMedidaDesviacionInducida: datosMedidaDesviacionInducida,
                                DatosFlexibilidadAcomodacionMonocular: datosFlexibilidadAcomodacionMonocular,
                                DatosEstereopsis: datosEstereopsis,
                                DatosVisionCromatica: datosVisionCromatica,
                                DatosPrescripcionOptica: datosPrescripcionOptica,
                                DatosDNP: datosDNP,
                                DatosPrescripcionMedicamentosa: datosPrescripcionMedicamentosa,
                                DatosRecomendacionUso: datosRecomendacionUso,
                                DatosConducta: datosConducta,
                                DatosRemisiones: datosRemisiones,
                                Usuario: user.uid
                            }).then(() => {
                                localStorage.setItem("Documento", numeroIdentificacion)
                                Swal.fire({
                                    title: 'Certificados',
                                    html: `
                                        <div class="containerButton">
                                            <label>Prescripción óptica:</label><a href="/views/certificates/prescripcionOptica.html" target="_blank"><button class="opt" id="po">Descargar</button></a>
                                            <label>Prescripción medicamento:</label><a href="/views/certificates/prescripcionMedicamentos.html" target="_blank"><button class="opt" id="pm">Descargar</button></a>
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
                getDocs(collection(db, 'Citas', 'id_Citas', 'data_Citas')).
                    then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            if (document.getElementById("numero").value == doc.data().Id) {
                                band = true
                            }
                        })
                    }).then(() => {
                        var band2 = false
                        getDocs(collection(db, "Clinic_History_Refraccion", "Data", "Data_Refraccion")).
                            then((querySnapshot) => {
                                querySnapshot.forEach((doc) => {
                                    if (document.getElementById("numero").value == doc.data().DatosPersonales.Numero_Identificacion) {
                                        band2 = true

                                    }
                                })
                            }).then(() => {
                                if (band == true && band2 == false) {
                                    getDocs(collection(db, 'Citas', 'id_Citas', 'data_Citas')).
                                        then((querySnapshot) => {
                                            querySnapshot.forEach((doc) => {
                                                if (document.getElementById("numero").value == doc.data().Id) {
                                                    document.getElementById("acompañante").value = doc.data().Acompañante
                                                    document.getElementById("apellidos").value = doc.data().Apellido
                                                    document.getElementById("eps").value = doc.data().EPS
                                                    document.getElementById("edad").value = doc.data().Edad
                                                    document.getElementById("fechaNacimiento").value = doc.data().Fecha_Nacimiento
                                                    document.getElementById("genero").value = doc.data().Genero
                                                    document.getElementById("nombres").value = doc.data().Nombre
                                                    document.getElementById("parentesco").value = doc.data().Paretesco
                                                    document.getElementById("telefono").value = doc.data().Telefono_Acompañante
                                                    document.getElementById("tipoAfiliacion").value = doc.data().Tipo_Afiliacion
                                                    document.getElementById("identificacion").value = doc.data().Tipo_Identificacion

                                                }
                                            })
                                        })
                                }
                                else if (band == false && band2 == true) {
                                    getDocs(collection(db, "Clinic_History_Refraccion", "Data", "Data_Refraccion")).
                                        then((querySnapshot) => {
                                            querySnapshot.forEach((doc) => {
                                                if (document.getElementById("numero").value == doc.data().DatosPersonales.Numero_Identificacion) {

                                                    document.getElementById("fecha").value = doc.data().DatosPersonales.Fecha
                                                    document.getElementById("no_h_c").value = doc.data().DatosPersonales.No_H_C
                                                    document.getElementById("horaEntrada").value = doc.data().DatosPersonales.Hora_Entrada
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
                                                    document.getElementById("remitidoPor").value = doc.data().DatosPersonales.Remitido_Por
                                                    document.getElementById("tipoVinculacion").value = doc.data().DatosPersonales.Tipo_Vinculacion
                                                    document.getElementById("responsable").value = doc.data().DatosPersonales.Responsable
                                                    document.getElementById("parentesco").value = doc.data().DatosPersonales.Parentesco_Responsable
                                                    document.getElementById("celular").value = doc.data().DatosPersonales.Celular_Responsable
                                                    document.getElementById("acompañante").value = doc.data().DatosPersonales.Acompañante
                                                    document.getElementById("parentesco2").value = doc.data().DatosPersonales.Parentesco_Acompañante
                                                    document.getElementById("direccionResidencia").value = doc.data().DatosPersonales.DireccionResidencia_Acompañante
                                                    document.getElementById("barrio2").value = doc.data().DatosPersonales.Barrio_Acompañante
                                                    document.getElementById("telefono2").value = doc.data().DatosPersonales.Telefono_Acompañante
                                                    document.getElementById("eps").value = doc.data().DatosPersonales.Eps
                                                    document.getElementById("tipoAfiliacion").value = doc.data().DatosPersonales.Tipo_Afiliacion

                                                }
                                            })
                                        })
                                }
                                else if (band == true && band2 == true) {
                                    getDocs(collection(db, "Clinic_History_Refraccion", "Data", "Data_Refraccion")).
                                        then((querySnapshot) => {
                                            querySnapshot.forEach((doc) => {
                                                if (document.getElementById("numero").value == doc.data().DatosPersonales.Numero_Identificacion) {

                                                    document.getElementById("fecha").value = doc.data().DatosPersonales.Fecha
                                                    document.getElementById("no_h_c").value = doc.data().DatosPersonales.No_H_C
                                                    document.getElementById("horaEntrada").value = doc.data().DatosPersonales.Hora_Entrada
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
                                                    document.getElementById("remitidoPor").value = doc.data().DatosPersonales.Remitido_Por
                                                    document.getElementById("tipoVinculacion").value = doc.data().DatosPersonales.Tipo_Vinculacion
                                                    document.getElementById("responsable").value = doc.data().DatosPersonales.Responsable
                                                    document.getElementById("parentesco").value = doc.data().DatosPersonales.Parentesco_Responsable
                                                    document.getElementById("celular").value = doc.data().DatosPersonales.Celular_Responsable
                                                    document.getElementById("acompañante").value = doc.data().DatosPersonales.Acompañante
                                                    document.getElementById("parentesco2").value = doc.data().DatosPersonales.Parentesco_Acompañante
                                                    document.getElementById("direccionResidencia").value = doc.data().DatosPersonales.DireccionResidencia_Acompañante
                                                    document.getElementById("barrio2").value = doc.data().DatosPersonales.Barrio_Acompañante
                                                    document.getElementById("telefono2").value = doc.data().DatosPersonales.Telefono_Acompañante
                                                    document.getElementById("eps").value = doc.data().DatosPersonales.Eps
                                                    document.getElementById("tipoAfiliacion").value = doc.data().DatosPersonales.Tipo_Afiliacion

                                                }
                                            })
                                        })
                                }
                                else {
                                    Swal.fire({
                                        title: "ERROR",
                                        text: "No se encontró ningún paciente con ese número de identificación",
                                        icon: "error"
                                    });
                                }

                            })
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