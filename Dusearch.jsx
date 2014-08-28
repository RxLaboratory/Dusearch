/*
    Dusearch : helps you find any file/After Effects project you need:
	- find any files based on filename (and metadatas: still in dev)
	- find an AEP/AET/AEPX based on its content : item names, layer names, textlayer source texts
	- find inside a folder and all of its subfolders
	- filter results
	- one click import file / open project
	- advanced search : use wildcards (*), include terms (+), exclude terms (-), spaces are considered as "OR"
    
    Copyright (c) 2014 Nicolas Dufresne
    
    
    //TODO recherche sur les autres éléments after
    //TODO bouton subfolders

    */



function Dusearch(obj) {

	//===============================================
    //================= IMAGES ======================
    //===============================================
	{
var scriptMng = new Object();
scriptMng.files = new Object();
scriptMng.files["/dossier.png"] = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x11\x00\x00\x00\x11\b\x06\x00\x00\x00;mG\u00FA\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x03!iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.5-c021 79.154911, 2013/10/29-11:47:16        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stRef=\"http://ns.adobe.com/xap/1.0/sType/ResourceRef#\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmpMM:DocumentID=\"xmp.did:7DA49F3EA45311E3A809A4F3FE8D68C0\" xmpMM:InstanceID=\"xmp.iid:7DA49F3DA45311E3A809A4F3FE8D68C0\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\"> <xmpMM:DerivedFrom stRef:instanceID=\"xmp.iid:3EE4FA83A45111E3BA74FEF84A513B89\" stRef:documentID=\"xmp.did:3EE4FA84A45111E3BA74FEF84A513B89\"/> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>1\u0081\u00DF\u00EA\x00\x00\x00\u0084IDATx\u00DAb\u00FC\u00FF\u00FF?\x03\u00A5\u0080\u0089\u0081\n\u0080\x05\u00C6\u00D0\u00D6\u00D6\u00FE\u00FF\u00FA\u00F5k\x14IIII\u0086\u008B\x17/2\x12mH^^\x1E\u0083\u008D\u008D\r\u008A\u00E4\u00EE\u00DD\u00BB\u0089r\t#,L\u00AE^\u00BD\u008A\x118\u00BF~\u00FDb\u00F0\u00F6\u00F6f\u00F8\u00F3\u00E7\x0F\u0086\u00C6W\u00AF^1b\u00B8\x04\x1B`cc#\u00CA5pC\u00FE\u00FD\u00FBGy\u00C0\u00FE\u00FE\u00FD\u009BrC\u00FE\u00FE\u00FD;\u00EA\x124C\u00A4\u00A5\u00A5\u00C96\u0084q\u00D0d\u00C0\u00C1c\b@\u0080\x01\x00IV5\u00A9\x15w1\u0098\x00\x00\x00\x00IEND\u00AEB`\u0082";
scriptMng.files["/import.png"] = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x12\x00\x00\x00\x10\b\x06\x00\x00\x00\x1B\x06/\\\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\nOiCCPPhotoshop ICC profile\x00\x00x\u00DA\u009DSgTS\u00E9\x16=\u00F7\u00DE\u00F4BK\u0088\u0080\u0094KoR\x15\b RB\u008B\u0080\x14\u0091&*!\t\x10J\u0088!\u00A1\u00D9\x15Q\u00C1\x11EE\x04\x1B\u00C8\u00A0\u0088\x03\u008E\u008E\u0080\u008C\x15Q,\f\u008A\n\u00D8\x07\u00E4!\u00A2\u008E\u0083\u00A3\u0088\u008A\u00CA\u00FB\u00E1{\u00A3k\u00D6\u00BC\u00F7\u00E6\u00CD\u00FE\u00B5\u00D7>\u00E7\u00AC\u00F3\u009D\u00B3\u00CF\x07\u00C0\b\f\u0096H3Q5\u0080\f\u00A9B\x1E\x11\u00E0\u0083\u00C7\u00C4\u00C6\u00E1\u00E4.@\u0081\n$p\x00\x10\b\u00B3d!s\u00FD#\x01\x00\u00F8~<<+\"\u00C0\x07\u00BE\x00\x01x\u00D3\x0B\b\x00\u00C0M\u009B\u00C00\x1C\u0087\u00FF\x0F\u00EAB\u0099\\\x01\u0080\u0084\x01\u00C0t\u00918K\b\u0080\x14\x00@z\u008EB\u00A6\x00@F\x01\u0080\u009D\u0098&S\x00\u00A0\x04\x00`\u00CBcb\u00E3\x00P-\x00`'\x7F\u00E6\u00D3\x00\u0080\u009D\u00F8\u0099{\x01\x00[\u0094!\x15\x01\u00A0\u0091\x00 \x13e\u0088D\x00h;\x00\u00AC\u00CFV\u008AE\x00X0\x00\x14fK\u00C49\x00\u00D8-\x000IWfH\x00\u00B0\u00B7\x00\u00C0\u00CE\x10\x0B\u00B2\x00\b\f\x000Q\u0088\u0085)\x00\x04{\x00`\u00C8##x\x00\u0084\u0099\x00\x14F\u00F2W<\u00F1+\u00AE\x10\u00E7*\x00\x00x\u0099\u00B2<\u00B9$9E\u0081[\b-q\x07WW.\x1E(\u00CEI\x17+\x146a\x02a\u009A@.\u00C2y\u0099\x192\u00814\x0F\u00E0\u00F3\u00CC\x00\x00\u00A0\u0091\x15\x11\u00E0\u0083\u00F3\u00FDx\u00CE\x0E\u00AE\u00CE\u00CE6\u008E\u00B6\x0E_-\u00EA\u00BF\x06\u00FF\"bb\u00E3\u00FE\u00E5\u00CF\u00ABp@\x00\x00\u00E1t~\u00D1\u00FE,/\u00B3\x1A\u0080;\x06\u0080m\u00FE\u00A2%\u00EE\x04h^\x0B\u00A0u\u00F7\u008Bf\u00B2\x0F@\u00B5\x00\u00A0\u00E9\u00DAW\u00F3p\u00F8~<<E\u00A1\u0090\u00B9\u00D9\u00D9\u00E5\u00E4\u00E4\u00D8J\u00C4B[a\u00CAW}\u00FEg\u00C2_\u00C0W\u00FDl\u00F9~<\u00FC\u00F7\u00F5\u00E0\u00BE\u00E2$\u00812]\u0081G\x04\u00F8\u00E0\u00C2\u00CC\u00F4L\u00A5\x1C\u00CF\u0092\t\u0084b\u00DC\u00E6\u008FG\u00FC\u00B7\x0B\u00FF\u00FC\x1D\u00D3\"\u00C4Ib\u00B9X*\x14\u00E3Q\x12q\u008ED\u009A\u008C\u00F32\u00A5\"\u0089B\u0092)\u00C5%\u00D2\u00FFd\u00E2\u00DF,\u00FB\x03>\u00DF5\x00\u00B0j>\x01{\u0091-\u00A8]c\x03\u00F6K'\x10Xt\u00C0\u00E2\u00F7\x00\x00\u00F2\u00BBo\u00C1\u00D4(\b\x03\u0080h\u0083\u00E1\u00CFw\u00FF\u00EF?\u00FDG\u00A0%\x00\u0080fI\u0092q\x00\x00^D$.T\u00CA\u00B3?\u00C7\b\x00\x00D\u00A0\u0081*\u00B0A\x1B\u00F4\u00C1\x18,\u00C0\x06\x1C\u00C1\x05\u00DC\u00C1\x0B\u00FC`6\u0084B$\u00C4\u00C2B\x10B\nd\u0080\x1Cr`)\u00AC\u0082B(\u0086\u00CD\u00B0\x1D*`/\u00D4@\x1D4\u00C0Qh\u0086\u0093p\x0E.\u00C2U\u00B8\x0E=p\x0F\u00FAa\b\u009E\u00C1(\u00BC\u0081\t\x04A\u00C8\b\x13a!\u00DA\u0088\x01b\u008AX#\u008E\b\x17\u0099\u0085\u00F8!\u00C1H\x04\x12\u008B$ \u00C9\u0088\x14Q\"K\u00915H1R\u008AT UH\x1D\u00F2=r\x029\u0087\\F\u00BA\u0091;\u00C8\x002\u0082\u00FC\u0086\u00BCG1\u0094\u0081\u00B2Q=\u00D4\f\u00B5C\u00B9\u00A87\x1A\u0084F\u00A2\x0B\u00D0dt1\u009A\u008F\x16\u00A0\u009B\u00D0r\u00B4\x1A=\u008C6\u00A1\u00E7\u00D0\u00ABh\x0F\u00DA\u008F>C\u00C70\u00C0\u00E8\x18\x073\u00C4l0.\u00C6\u00C3B\u00B18,\t\u0093c\u00CB\u00B1\"\u00AC\f\u00AB\u00C6\x1A\u00B0V\u00AC\x03\u00BB\u0089\u00F5c\u00CF\u00B1w\x04\x12\u0081E\u00C0\t6\x04wB a\x1EAHXLXN\u00D8H\u00A8 \x1C$4\x11\u00DA\t7\t\x03\u0084Q\u00C2'\"\u0093\u00A8K\u00B4&\u00BA\x11\u00F9\u00C4\x18b21\u0087XH,#\u00D6\x12\u008F\x13/\x10{\u0088C\u00C47$\x12\u0089C2'\u00B9\u0090\x02I\u00B1\u00A4T\u00D2\x12\u00D2F\u00D2nR#\u00E9,\u00A9\u009B4H\x1A#\u0093\u00C9\u00DAdk\u00B2\x079\u0094, +\u00C8\u0085\u00E4\u009D\u00E4\u00C3\u00E43\u00E4\x1B\u00E4!\u00F2[\n\u009Db@q\u00A4\u00F8S\u00E2(R\u00CAjJ\x19\u00E5\x10\u00E54\u00E5\x06e\u00982AU\u00A3\u009AR\u00DD\u00A8\u00A1T\x115\u008FZB\u00AD\u00A1\u00B6R\u00AFQ\u0087\u00A8\x134u\u009A9\u00CD\u0083\x16IK\u00A5\u00AD\u00A2\u0095\u00D3\x1Ah\x17h\u00F7i\u00AF\u00E8t\u00BA\x11\u00DD\u0095\x1EN\u0097\u00D0W\u00D2\u00CB\u00E9G\u00E8\u0097\u00E8\x03\u00F4w\f\r\u0086\x15\u0083\u00C7\u0088g(\x19\u009B\x18\x07\x18g\x19w\x18\u00AF\u0098L\u00A6\x19\u00D3\u008B\x19\u00C7T071\u00EB\u0098\u00E7\u0099\x0F\u0099oUX*\u00B6*|\x15\u0091\u00CA\n\u0095J\u0095&\u0095\x1B*/T\u00A9\u00AA\u00A6\u00AA\u00DE\u00AA\x0BU\u00F3U\u00CBT\u008F\u00A9^S}\u00AEFU3S\u00E3\u00A9\t\u00D4\u0096\u00ABU\u00AA\u009DP\u00EBS\x1BSg\u00A9;\u00A8\u0087\u00AAg\u00A8oT?\u00A4~Y\u00FD\u0089\x06Y\u00C3L\u00C3OC\u00A4Q\u00A0\u00B1_\u00E3\u00BC\u00C6 \x0Bc\x19\u00B3x,!k\r\u00AB\u0086u\u00815\u00C4&\u00B1\u00CD\u00D9|v*\u00BB\u0098\u00FD\x1D\u00BB\u008B=\u00AA\u00A9\u00A19C3J3W\u00B3R\u00F3\u0094f?\x07\u00E3\u0098q\u00F8\u009CtN\t\u00E7(\u00A7\u0097\u00F3~\u008A\u00DE\x14\u00EF)\u00E2)\x1B\u00A64L\u00B91e\\k\u00AA\u0096\u0097\u0096X\u00ABH\u00ABQ\u00ABG\u00EB\u00BD6\u00AE\u00ED\u00A7\u009D\u00A6\u00BDE\u00BBY\u00FB\u0081\x0EA\u00C7J'\\'Gg\u008F\u00CE\x05\u009D\u00E7S\u00D9S\u00DD\u00A7\n\u00A7\x16M=:\u00F5\u00AE.\u00AAk\u00A5\x1B\u00A1\u00BBDw\u00BFn\u00A7\u00EE\u0098\u009E\u00BE^\u0080\u009ELo\u00A7\u00DEy\u00BD\u00E7\u00FA\x1C}/\u00FDT\u00FDm\u00FA\u00A7\u00F5G\fX\x06\u00B3\f$\x06\u00DB\f\u00CE\x18<\u00C55qo<\x1D/\u00C7\u00DB\u00F1QC]\u00C3@C\u00A5a\u0095a\u0097\u00E1\u0084\u0091\u00B9\u00D1<\u00A3\u00D5F\u008DF\x0F\u008Ci\u00C6\\\u00E3$\u00E3m\u00C6m\u00C6\u00A3&\x06&!&KM\u00EAM\u00EE\u009ARM\u00B9\u00A6)\u00A6;L;L\u00C7\u00CD\u00CC\u00CD\u00A2\u00CD\u00D6\u00995\u009B=1\u00D72\u00E7\u009B\u00E7\u009B\u00D7\u009B\u00DF\u00B7`ZxZ,\u00B6\u00A8\u00B6\u00B8eI\u00B2\u00E4Z\u00A6Y\u00EE\u00B6\u00BCn\u0085Z9Y\u00A5XUZ]\u00B3F\u00AD\u009D\u00AD%\u00D6\u00BB\u00AD\u00BB\u00A7\x11\u00A7\u00B9N\u0093N\u00AB\u009E\u00D6g\u00C3\u00B0\u00F1\u00B6\u00C9\u00B6\u00A9\u00B7\x19\u00B0\u00E5\u00D8\x06\u00DB\u00AE\u00B6m\u00B6}agb\x17g\u00B7\u00C5\u00AE\u00C3\u00EE\u0093\u00BD\u0093}\u00BA}\u008D\u00FD=\x07\r\u0087\u00D9\x0E\u00AB\x1DZ\x1D~s\u00B4r\x14:V:\u00DE\u009A\u00CE\u009C\u00EE?}\u00C5\u00F4\u0096\u00E9/gX\u00CF\x10\u00CF\u00D83\u00E3\u00B6\x13\u00CB)\u00C4i\u009DS\u009B\u00D3Gg\x17g\u00B9s\u0083\u00F3\u0088\u008B\u0089K\u0082\u00CB.\u0097>.\u009B\x1B\u00C6\u00DD\u00C8\u00BD\u00E4Jt\u00F5q]\u00E1z\u00D2\u00F5\u009D\u009B\u00B3\u009B\u00C2\u00ED\u00A8\u00DB\u00AF\u00EE6\u00EEi\u00EE\u0087\u00DC\u009F\u00CC4\u009F)\u009EY3s\u00D0\u00C3\u00C8C\u00E0Q\u00E5\u00D1?\x0B\u009F\u00950k\u00DF\u00AC~OCO\u0081g\u00B5\u00E7#/c/\u0091W\u00AD\u00D7\u00B0\u00B7\u00A5w\u00AA\u00F7a\u00EF\x17>\u00F6>r\u009F\u00E3>\u00E3<7\u00DE2\u00DEY_\u00CC7\u00C0\u00B7\u00C8\u00B7\u00CBO\u00C3o\u009E_\u0085\u00DFC\x7F#\u00FFd\u00FFz\u00FF\u00D1\x00\u00A7\u0080%\x01g\x03\u0089\u0081A\u0081[\x02\u00FB\u00F8z|!\u00BF\u008E?:\u00DBe\u00F6\u00B2\u00D9\u00EDA\u008C\u00A0\u00B9A\x15A\u008F\u0082\u00AD\u0082\u00E5\u00C1\u00AD!h\u00C8\u00EC\u0090\u00AD!\u00F7\u00E7\u0098\u00CE\u0091\u00CEi\x0E\u0085P~\u00E8\u00D6\u00D0\x07a\u00E6a\u008B\u00C3~\f'\u0085\u0087\u0085W\u0086?\u008Ep\u0088X\x1A\u00D11\u00975w\u00D1\u00DCCs\u00DFD\u00FAD\u0096D\u00DE\u009Bg1O9\u00AF-J5*>\u00AA.j<\u00DA7\u00BA4\u00BA?\u00C6.fY\u00CC\u00D5X\u009DXIlK\x1C9.*\u00AE6nl\u00BE\u00DF\u00FC\u00ED\u00F3\u0087\u00E2\u009D\u00E2\x0B\u00E3{\x17\u0098/\u00C8]py\u00A1\u00CE\u00C2\u00F4\u0085\u00A7\x16\u00A9.\x12,:\u0096@L\u0088N8\u0094\u00F0A\x10*\u00A8\x16\u008C%\u00F2\x13w%\u008E\ny\u00C2\x1D\u00C2g\"/\u00D16\u00D1\u0088\u00D8C\\*\x1EN\u00F2H*Mz\u0092\u00EC\u0091\u00BC5y$\u00C53\u00A5,\u00E5\u00B9\u0084'\u00A9\u0090\u00BCL\rL\u00DD\u009B:\u009E\x16\u009Av m2=:\u00BD1\u0083\u0092\u0091\u0090qB\u00AA!M\u0093\u00B6g\u00EAg\u00E6fv\u00CB\u00ACe\u0085\u00B2\u00FE\u00C5n\u008B\u00B7/\x1E\u0095\x07\u00C9k\u00B3\u0090\u00AC\x05Y-\n\u00B6B\u00A6\u00E8TZ(\u00D7*\x07\u00B2geWf\u00BF\u00CD\u0089\u00CA9\u0096\u00AB\u009E+\u00CD\u00ED\u00CC\u00B3\u00CA\u00DB\u00907\u009C\u00EF\u009F\u00FF\u00ED\x12\u00C2\x12\u00E1\u0092\u00B6\u00A5\u0086KW-\x1DX\u00E6\u00BD\u00ACj9\u00B2<qy\u00DB\n\u00E3\x15\x05+\u0086V\x06\u00AC<\u00B8\u008A\u00B6*m\u00D5O\u00AB\u00EDW\u0097\u00AE~\u00BD&zMk\u0081^\u00C1\u00CA\u0082\u00C1\u00B5\x01k\u00EB\x0BU\n\u00E5\u0085}\u00EB\u00DC\u00D7\u00ED]OX/Y\u00DF\u00B5a\u00FA\u0086\u009D\x1B>\x15\u0089\u008A\u00AE\x14\u00DB\x17\u0097\x15\x7F\u00D8(\u00DCx\u00E5\x1B\u0087o\u00CA\u00BF\u0099\u00DC\u0094\u00B4\u00A9\u00AB\u00C4\u00B9d\u00CFf\u00D2f\u00E9\u00E6\u00DE-\u009E[\x0E\u0096\u00AA\u0097\u00E6\u0097\x0En\r\u00D9\u00DA\u00B4\r\u00DFV\u00B4\u00ED\u00F5\u00F6E\u00DB/\u0097\u00CD(\u00DB\u00BB\u0083\u00B6C\u00B9\u00A3\u00BF<\u00B8\u00BCe\u00A7\u00C9\u00CE\u00CD;?T\u00A4T\u00F4T\u00FAT6\u00EE\u00D2\u00DD\u00B5a\u00D7\u00F8n\u00D1\u00EE\x1B{\u00BC\u00F64\u00EC\u00D5\u00DB[\u00BC\u00F7\u00FD>\u00C9\u00BE\u00DBU\x01UM\u00D5f\u00D5e\u00FBI\u00FB\u00B3\u00F7?\u00AE\u0089\u00AA\u00E9\u00F8\u0096\u00FBm]\u00ADNmq\u00ED\u00C7\x03\u00D2\x03\u00FD\x07#\x0E\u00B6\u00D7\u00B9\u00D4\u00D5\x1D\u00D2=TR\u008F\u00D6+\u00EBG\x0E\u00C7\x1F\u00BE\u00FE\u009D\u00EFw-\r6\rU\u008D\u009C\u00C6\u00E2#pDy\u00E4\u00E9\u00F7\t\u00DF\u00F7\x1E\r:\u00DAv\u008C{\u00AC\u00E1\x07\u00D3\x1Fv\x1Dg\x1D/jB\u009A\u00F2\u009AF\u009BS\u009A\u00FB[b[\u00BAO\u00CC>\u00D1\u00D6\u00EA\u00DEz\u00FCG\u00DB\x1F\x0F\u009C4<YyJ\u00F3T\u00C9i\u00DA\u00E9\u0082\u00D3\u0093g\u00F2\u00CF\u008C\u009D\u0095\u009D}~.\u00F9\u00DC`\u00DB\u00A2\u00B6{\u00E7c\u00CE\u00DFj\x0Fo\u00EF\u00BA\x10t\u00E1\u00D2E\u00FF\u008B\u00E7;\u00BC;\u00CE\\\u00F2\u00B8t\u00F2\u00B2\u00DB\u00E5\x13W\u00B8W\u009A\u00AF:_m\u00EAt\u00EA<\u00FE\u0093\u00D3O\u00C7\u00BB\u009C\u00BB\u009A\u00AE\u00B9\\k\u00B9\u00EEz\u00BD\u00B5{f\u00F7\u00E9\x1B\u009E7\u00CE\u00DD\u00F4\u00BDy\u00F1\x16\u00FF\u00D6\u00D5\u009E9=\u00DD\u00BD\u00F3zo\u00F7\u00C5\u00F7\u00F5\u00DF\x16\u00DD~r'\u00FD\u00CE\u00CB\u00BB\u00D9w'\u00EE\u00AD\u00BCO\u00BC_\u00F4@\u00EDA\u00D9C\u00DD\u0087\u00D5?[\u00FE\u00DC\u00D8\u00EF\u00DC\x7Fj\u00C0w\u00A0\u00F3\u00D1\u00DCG\u00F7\x06\u0085\u0083\u00CF\u00FE\u0091\u00F5\u008F\x0FC\x05\u008F\u0099\u008F\u00CB\u0086\r\u0086\u00EB\u009E8>99\u00E2?r\u00FD\u00E9\u00FC\u00A7C\u00CFd\u00CF&\u009E\x17\u00FE\u00A2\u00FE\u00CB\u00AE\x17\x16/~\u00F8\u00D5\u00EB\u00D7\u00CE\u00D1\u0098\u00D1\u00A1\u0097\u00F2\u0097\u0093\u00BFm|\u00A5\u00FD\u00EA\u00C0\u00EB\x19\u00AF\u00DB\u00C6\u00C2\u00C6\x1E\u00BE\u00C9x31^\u00F4V\u00FB\u00ED\u00C1w\u00DCw\x1D\u00EF\u00A3\u00DF\x0FO\u00E4| \x7F(\u00FFh\u00F9\u00B1\u00F5S\u00D0\u00A7\u00FB\u0093\x19\u0093\u0093\u00FF\x04\x03\u0098\u00F3\u00FCc3-\u00DB\x00\x00\x00 cHRM\x00\x00z%\x00\x00\u0080\u0083\x00\x00\u00F9\u00FF\x00\x00\u0080\u00E9\x00\x00u0\x00\x00\u00EA`\x00\x00:\u0098\x00\x00\x17o\u0092_\u00C5F\x00\x00\x01\u0088IDATx\u00DA\u00AC\u00931k\"Q\x14\u0085\u00BF\u0099$\u00B0\u0084\u0088\x1B\u0098\u00C2\x11\x1B\u00B5\u0090\u00DBl\u00AF\u00BD\u0095\u0088\u008B\u0095\u008D\u009D\u00BD\u00A5\u00E0\u00B4ZXX\u00F9#\u00FC\x05\u00D3\u00C4\x1F`\u00B5\bi\u00A6\u00B2\u00D8\"\u0095\x0FC\x166\u00C4\u00E7\x1Bg\u009B\u00CDd\u00C4\u0089i\u00BCp\u00E1p\u00DE\u00BB\u00E7\u00DDs\x1F\u00D7\u008A\u00A2\u0088K\u00C4u\x1A\x19\x04\u0081\x05|?W(\"\u00CF_\n\x01\u0099N\u00A7\u00B3M;\u00B0m\u009B\u00F1x\u008C\u0088X_\n\u0089\u00C8\x1F\u00D7u\u00DF\x06\u0083\u00C1\u00B7$?\u0099Lh\u00B5Zx\u009E\x07\u00B0-\x16\u008B\x05\x11y\x05\u00B0?\u00B1\u0096\u00AD\u00D5j*\u008A\"\u0092i\u008C\u00A1R\u00A9\u00D0\u00EB\u00F5\x18\x0E\u0087\u00F7\u00EB\u00F5\u00FAw\u00DCi\u009AP\u00BB\u00DD~\u009C\u00CF\u00E7\x05\u00D7u\u00D1Z\u00C7i\u008CAkM\u00B9\\\u00A6\u00DB\u00ED\u00E2y\u00DE\u00CDYk\u00F9|>\u00C6\u00BB\u00DD.\u00C6\u00C6\x18F\u00A3\u00D1\u00C7 3\u0099\u00F332\u00C6\u00C4Xk\x1D\u00E3~\u00BF\x7Fto:\u009D\u00DE\u009D\b\u0095J\u00A5G\u00A0\x00\u0090\u00CB\u00E5\u00B2\x00\u008DF#.\u00F2}\u009F\u00D5ju$t8\x1C\u00AEN\u0084\x1C\u00C7\u00C9\x02\u00F7\u00C9\u008E\x1C\u00C79*L\u00DA\x04\b\u00C3\u00F0\u00D4\u009A\u00EF\u00FB1Y\u00AF\u00D7\x01X,\x161\u00A7\u0094:\x11\u00DA\u00EF\u00F7\x04A\u0090\x15\u0091\u0097\u00EB\u00C4\u00C5\x1F\u0080-\"\u00CFa\x18F\u00FF9Y.\u0097\u00BFf\u00B3\u00D9mrVgWDD^\u0092/\u00BD\u00BB\u00A9V\u00AB?\u009B\u00CD\u00E6\u00C3g\x02J\u00A9+\x00+mi7\u009B\u00CD\x16\u00B8SJU\u0080\u00A7\u00F7OH\u0089\u00BF\u00C0FD\x0E\u00D6\u00A5\u00B6\u00DF\u00E6B\u00F1o\x00\u00CD\u00FB\u00AAv\u0085\u00F0\u00F0\u00B8\x00\x00\x00\x00IEND\u00AEB`\u0082";
scriptMng.files["/loupe.png"] = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x13\x00\x00\x00\x13\b\x06\x00\x00\x00rP6\u00CC\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x009\u0094iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.5-c021 79.154911, 2013/10/29-11:47:16        \">\n   <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n      <rdf:Description rdf:about=\"\"\n            xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\"\n            xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\"\n            xmlns:stRef=\"http://ns.adobe.com/xap/1.0/sType/ResourceRef#\"\n            xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\"\n            xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n            xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\"\n            xmlns:tiff=\"http://ns.adobe.com/tiff/1.0/\"\n            xmlns:exif=\"http://ns.adobe.com/exif/1.0/\">\n         <xmp:CreatorTool>Adobe Photoshop CC (Windows)</xmp:CreatorTool>\n         <xmp:CreateDate>2014-03-05T11:30:40+01:00</xmp:CreateDate>\n         <xmp:ModifyDate>2014-03-05T12:05:50+01:00</xmp:ModifyDate>\n         <xmp:MetadataDate>2014-03-05T12:05:50+01:00</xmp:MetadataDate>\n         <xmpMM:InstanceID>xmp.iid:b9eeb9d3-eb4a-7645-b6da-ca1509cb0d17</xmpMM:InstanceID>\n         <xmpMM:DocumentID>xmp.did:755D9D8BA45511E389508EB2C9AA5B2A</xmpMM:DocumentID>\n         <xmpMM:DerivedFrom rdf:parseType=\"Resource\">\n            <stRef:instanceID>xmp.iid:755D9D88A45511E389508EB2C9AA5B2A</stRef:instanceID>\n            <stRef:documentID>xmp.did:755D9D89A45511E389508EB2C9AA5B2A</stRef:documentID>\n         </xmpMM:DerivedFrom>\n         <xmpMM:OriginalDocumentID>xmp.did:755D9D8BA45511E389508EB2C9AA5B2A</xmpMM:OriginalDocumentID>\n         <xmpMM:History>\n            <rdf:Seq>\n               <rdf:li rdf:parseType=\"Resource\">\n                  <stEvt:action>saved</stEvt:action>\n                  <stEvt:instanceID>xmp.iid:b9eeb9d3-eb4a-7645-b6da-ca1509cb0d17</stEvt:instanceID>\n                  <stEvt:when>2014-03-05T12:05:50+01:00</stEvt:when>\n                  <stEvt:softwareAgent>Adobe Photoshop CC (Windows)</stEvt:softwareAgent>\n                  <stEvt:changed>/</stEvt:changed>\n               </rdf:li>\n            </rdf:Seq>\n         </xmpMM:History>\n         <dc:format>image/png</dc:format>\n         <photoshop:ColorMode>3</photoshop:ColorMode>\n         <tiff:Orientation>1</tiff:Orientation>\n         <tiff:XResolution>720000/10000</tiff:XResolution>\n         <tiff:YResolution>720000/10000</tiff:YResolution>\n         <tiff:ResolutionUnit>2</tiff:ResolutionUnit>\n         <exif:ColorSpace>65535</exif:ColorSpace>\n         <exif:PixelXDimension>19</exif:PixelXDimension>\n         <exif:PixelYDimension>19</exif:PixelYDimension>\n      </rdf:Description>\n   </rdf:RDF>\n</x:xmpmeta>\n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                            \n<?xpacket end=\"w\"?>t\u0097\u00CD\u00B3\x00\x00\x00 cHRM\x00\x00z%\x00\x00\u0080\u0083\x00\x00\u00F9\u00FF\x00\x00\u0080\u00E9\x00\x00u0\x00\x00\u00EA`\x00\x00:\u0098\x00\x00\x17o\u0092_\u00C5F\x00\x00\x01\u008DIDATx\u00DA\u00AC\u0094=\u00AB\u00EA@\x14EWL\x04\x114\n6\u00DA\u0088\u00B5\u009D\u0098\u00C6 \x04\x0B;\u00D1\u00D6N\x1B;\u00C1\u009F#6\u008A\u0085\u00FE\x00\u00DB\x14\x01AP,\u00B4\u00B4\u00B2Ke+\u0086\u0084x^\u00F5.\u00F8\u00F0#>\u00EE\u0086]\u00CDf\u00CD\u00CC\u00999G\x11\x11~K1~QZ\u00D4\u00A0eYr\u00B9\\\u00F0<\x0F\u0080D\"A.\u0097\u00C3q\x1C\u00E5+X\u00B5Z\u0095Z\u00ADF\u00AB\u00D5\u00A2P(\x00\u00E0\u00BA.\u00AB\u00D5\u008Aj\u00B5*\u00FB\u00FD^\x01P>\u00D5\u00CC\u00B2,\u00E9v\u00BB\u00D4\u00EB\u00F5\u00A7\u00EB\u00EB\u00F5\u009A\u00E5r\u0089\u00E38\u00CA\u00C7\u0093U*\x15L\u00D3\u00E4\u00D5\u00A6\u00A6ir:\u009D\u00A2]\u00B3\u00D1hp\u00BF\u00DF?f\"\u00C1\u008A\u00C5\"a\x18\u00BE\u00CD\u0094J\u00A5h\u00B0x<N\x10\x04o3\u00AA\u00AAF\u0083]\u00AFW\u0080\u00975\u008B\u00C5b?\u0099\u00B7\u009F\u00B6\u00D3\u00E9\u00C8b\u00B1 \b\x02D\u00840\f\x1F\f\u0090J\u00A5\u00D8l6\u00EFa\u009DNG\\\u00D7\u00C50\f\u00D2\u00E94\u00D9l\u0096d2\u0089\u00A6ih\u009AF2\u0099$\u0093\u00C9p>\u009F\x19\x0E\u0087\u00CAK\u00D8_\u00D0h4\u00A2\\.s\u00BB\u00DD\u00B0m\x1B\u00DF\u00F7\u00D1u\x1D]\u00D7\u00F1}\x1F\u00DB\u00B6i6\u009B?\x1D\u0080\u0088<\u00B8\u00DDn\u008Ba\x182\u009F\u00CF\u00E5x<\u00CAn\u00B7\u0093^\u00AF'\u00FF\u00E6\u009E\u00F9)h6\u009B\u00C9\u00E1p\u0090\u00EDv\x1B\x19$\"\u008F\u00AF\u0099N\u00A7\x19\f\x06\u00E4\u00F3y<\u00CFc<\x1E3\u009DN\u0095\u00FF\u009A\x1A\u00AA\u00AA\u0092\u00CDf\u00F1<\u008F\u00C9d\u00F2\x15\u00E8i\u00A3\u00F7\u00FB}\x01\u00BE\x06E\u009A\x1A\u00DF\u00E8\u00CF\x00\x05\u00D1\u00FEL\x1B\u00E5\u0086U\x00\x00\x00\x00IEND\u00AEB`\u0082";
scriptMng.files["/open.png"] = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x0E\x00\x00\x00\x0F\b\x06\x00\x00\x00\u00D4\x14\u00FEt\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\nOiCCPPhotoshop ICC profile\x00\x00x\u00DA\u009DSgTS\u00E9\x16=\u00F7\u00DE\u00F4BK\u0088\u0080\u0094KoR\x15\b RB\u008B\u0080\x14\u0091&*!\t\x10J\u0088!\u00A1\u00D9\x15Q\u00C1\x11EE\x04\x1B\u00C8\u00A0\u0088\x03\u008E\u008E\u0080\u008C\x15Q,\f\u008A\n\u00D8\x07\u00E4!\u00A2\u008E\u0083\u00A3\u0088\u008A\u00CA\u00FB\u00E1{\u00A3k\u00D6\u00BC\u00F7\u00E6\u00CD\u00FE\u00B5\u00D7>\u00E7\u00AC\u00F3\u009D\u00B3\u00CF\x07\u00C0\b\f\u0096H3Q5\u0080\f\u00A9B\x1E\x11\u00E0\u0083\u00C7\u00C4\u00C6\u00E1\u00E4.@\u0081\n$p\x00\x10\b\u00B3d!s\u00FD#\x01\x00\u00F8~<<+\"\u00C0\x07\u00BE\x00\x01x\u00D3\x0B\b\x00\u00C0M\u009B\u00C00\x1C\u0087\u00FF\x0F\u00EAB\u0099\\\x01\u0080\u0084\x01\u00C0t\u00918K\b\u0080\x14\x00@z\u008EB\u00A6\x00@F\x01\u0080\u009D\u0098&S\x00\u00A0\x04\x00`\u00CBcb\u00E3\x00P-\x00`'\x7F\u00E6\u00D3\x00\u0080\u009D\u00F8\u0099{\x01\x00[\u0094!\x15\x01\u00A0\u0091\x00 \x13e\u0088D\x00h;\x00\u00AC\u00CFV\u008AE\x00X0\x00\x14fK\u00C49\x00\u00D8-\x000IWfH\x00\u00B0\u00B7\x00\u00C0\u00CE\x10\x0B\u00B2\x00\b\f\x000Q\u0088\u0085)\x00\x04{\x00`\u00C8##x\x00\u0084\u0099\x00\x14F\u00F2W<\u00F1+\u00AE\x10\u00E7*\x00\x00x\u0099\u00B2<\u00B9$9E\u0081[\b-q\x07WW.\x1E(\u00CEI\x17+\x146a\x02a\u009A@.\u00C2y\u0099\x192\u00814\x0F\u00E0\u00F3\u00CC\x00\x00\u00A0\u0091\x15\x11\u00E0\u0083\u00F3\u00FDx\u00CE\x0E\u00AE\u00CE\u00CE6\u008E\u00B6\x0E_-\u00EA\u00BF\x06\u00FF\"bb\u00E3\u00FE\u00E5\u00CF\u00ABp@\x00\x00\u00E1t~\u00D1\u00FE,/\u00B3\x1A\u0080;\x06\u0080m\u00FE\u00A2%\u00EE\x04h^\x0B\u00A0u\u00F7\u008Bf\u00B2\x0F@\u00B5\x00\u00A0\u00E9\u00DAW\u00F3p\u00F8~<<E\u00A1\u0090\u00B9\u00D9\u00D9\u00E5\u00E4\u00E4\u00D8J\u00C4B[a\u00CAW}\u00FEg\u00C2_\u00C0W\u00FDl\u00F9~<\u00FC\u00F7\u00F5\u00E0\u00BE\u00E2$\u00812]\u0081G\x04\u00F8\u00E0\u00C2\u00CC\u00F4L\u00A5\x1C\u00CF\u0092\t\u0084b\u00DC\u00E6\u008FG\u00FC\u00B7\x0B\u00FF\u00FC\x1D\u00D3\"\u00C4Ib\u00B9X*\x14\u00E3Q\x12q\u008ED\u009A\u008C\u00F32\u00A5\"\u0089B\u0092)\u00C5%\u00D2\u00FFd\u00E2\u00DF,\u00FB\x03>\u00DF5\x00\u00B0j>\x01{\u0091-\u00A8]c\x03\u00F6K'\x10Xt\u00C0\u00E2\u00F7\x00\x00\u00F2\u00BBo\u00C1\u00D4(\b\x03\u0080h\u0083\u00E1\u00CFw\u00FF\u00EF?\u00FDG\u00A0%\x00\u0080fI\u0092q\x00\x00^D$.T\u00CA\u00B3?\u00C7\b\x00\x00D\u00A0\u0081*\u00B0A\x1B\u00F4\u00C1\x18,\u00C0\x06\x1C\u00C1\x05\u00DC\u00C1\x0B\u00FC`6\u0084B$\u00C4\u00C2B\x10B\nd\u0080\x1Cr`)\u00AC\u0082B(\u0086\u00CD\u00B0\x1D*`/\u00D4@\x1D4\u00C0Qh\u0086\u0093p\x0E.\u00C2U\u00B8\x0E=p\x0F\u00FAa\b\u009E\u00C1(\u00BC\u0081\t\x04A\u00C8\b\x13a!\u00DA\u0088\x01b\u008AX#\u008E\b\x17\u0099\u0085\u00F8!\u00C1H\x04\x12\u008B$ \u00C9\u0088\x14Q\"K\u00915H1R\u008AT UH\x1D\u00F2=r\x029\u0087\\F\u00BA\u0091;\u00C8\x002\u0082\u00FC\u0086\u00BCG1\u0094\u0081\u00B2Q=\u00D4\f\u00B5C\u00B9\u00A87\x1A\u0084F\u00A2\x0B\u00D0dt1\u009A\u008F\x16\u00A0\u009B\u00D0r\u00B4\x1A=\u008C6\u00A1\u00E7\u00D0\u00ABh\x0F\u00DA\u008F>C\u00C70\u00C0\u00E8\x18\x073\u00C4l0.\u00C6\u00C3B\u00B18,\t\u0093c\u00CB\u00B1\"\u00AC\f\u00AB\u00C6\x1A\u00B0V\u00AC\x03\u00BB\u0089\u00F5c\u00CF\u00B1w\x04\x12\u0081E\u00C0\t6\x04wB a\x1EAHXLXN\u00D8H\u00A8 \x1C$4\x11\u00DA\t7\t\x03\u0084Q\u00C2'\"\u0093\u00A8K\u00B4&\u00BA\x11\u00F9\u00C4\x18b21\u0087XH,#\u00D6\x12\u008F\x13/\x10{\u0088C\u00C47$\x12\u0089C2'\u00B9\u0090\x02I\u00B1\u00A4T\u00D2\x12\u00D2F\u00D2nR#\u00E9,\u00A9\u009B4H\x1A#\u0093\u00C9\u00DAdk\u00B2\x079\u0094, +\u00C8\u0085\u00E4\u009D\u00E4\u00C3\u00E43\u00E4\x1B\u00E4!\u00F2[\n\u009Db@q\u00A4\u00F8S\u00E2(R\u00CAjJ\x19\u00E5\x10\u00E54\u00E5\x06e\u00982AU\u00A3\u009AR\u00DD\u00A8\u00A1T\x115\u008FZB\u00AD\u00A1\u00B6R\u00AFQ\u0087\u00A8\x134u\u009A9\u00CD\u0083\x16IK\u00A5\u00AD\u00A2\u0095\u00D3\x1Ah\x17h\u00F7i\u00AF\u00E8t\u00BA\x11\u00DD\u0095\x1EN\u0097\u00D0W\u00D2\u00CB\u00E9G\u00E8\u0097\u00E8\x03\u00F4w\f\r\u0086\x15\u0083\u00C7\u0088g(\x19\u009B\x18\x07\x18g\x19w\x18\u00AF\u0098L\u00A6\x19\u00D3\u008B\x19\u00C7T071\u00EB\u0098\u00E7\u0099\x0F\u0099oUX*\u00B6*|\x15\u0091\u00CA\n\u0095J\u0095&\u0095\x1B*/T\u00A9\u00AA\u00A6\u00AA\u00DE\u00AA\x0BU\u00F3U\u00CBT\u008F\u00A9^S}\u00AEFU3S\u00E3\u00A9\t\u00D4\u0096\u00ABU\u00AA\u009DP\u00EBS\x1BSg\u00A9;\u00A8\u0087\u00AAg\u00A8oT?\u00A4~Y\u00FD\u0089\x06Y\u00C3L\u00C3OC\u00A4Q\u00A0\u00B1_\u00E3\u00BC\u00C6 \x0Bc\x19\u00B3x,!k\r\u00AB\u0086u\u00815\u00C4&\u00B1\u00CD\u00D9|v*\u00BB\u0098\u00FD\x1D\u00BB\u008B=\u00AA\u00A9\u00A19C3J3W\u00B3R\u00F3\u0094f?\x07\u00E3\u0098q\u00F8\u009CtN\t\u00E7(\u00A7\u0097\u00F3~\u008A\u00DE\x14\u00EF)\u00E2)\x1B\u00A64L\u00B91e\\k\u00AA\u0096\u0097\u0096X\u00ABH\u00ABQ\u00ABG\u00EB\u00BD6\u00AE\u00ED\u00A7\u009D\u00A6\u00BDE\u00BBY\u00FB\u0081\x0EA\u00C7J'\\'Gg\u008F\u00CE\x05\u009D\u00E7S\u00D9S\u00DD\u00A7\n\u00A7\x16M=:\u00F5\u00AE.\u00AAk\u00A5\x1B\u00A1\u00BBDw\u00BFn\u00A7\u00EE\u0098\u009E\u00BE^\u0080\u009ELo\u00A7\u00DEy\u00BD\u00E7\u00FA\x1C}/\u00FDT\u00FDm\u00FA\u00A7\u00F5G\fX\x06\u00B3\f$\x06\u00DB\f\u00CE\x18<\u00C55qo<\x1D/\u00C7\u00DB\u00F1QC]\u00C3@C\u00A5a\u0095a\u0097\u00E1\u0084\u0091\u00B9\u00D1<\u00A3\u00D5F\u008DF\x0F\u008Ci\u00C6\\\u00E3$\u00E3m\u00C6m\u00C6\u00A3&\x06&!&KM\u00EAM\u00EE\u009ARM\u00B9\u00A6)\u00A6;L;L\u00C7\u00CD\u00CC\u00CD\u00A2\u00CD\u00D6\u00995\u009B=1\u00D72\u00E7\u009B\u00E7\u009B\u00D7\u009B\u00DF\u00B7`ZxZ,\u00B6\u00A8\u00B6\u00B8eI\u00B2\u00E4Z\u00A6Y\u00EE\u00B6\u00BCn\u0085Z9Y\u00A5XUZ]\u00B3F\u00AD\u009D\u00AD%\u00D6\u00BB\u00AD\u00BB\u00A7\x11\u00A7\u00B9N\u0093N\u00AB\u009E\u00D6g\u00C3\u00B0\u00F1\u00B6\u00C9\u00B6\u00A9\u00B7\x19\u00B0\u00E5\u00D8\x06\u00DB\u00AE\u00B6m\u00B6}agb\x17g\u00B7\u00C5\u00AE\u00C3\u00EE\u0093\u00BD\u0093}\u00BA}\u008D\u00FD=\x07\r\u0087\u00D9\x0E\u00AB\x1DZ\x1D~s\u00B4r\x14:V:\u00DE\u009A\u00CE\u009C\u00EE?}\u00C5\u00F4\u0096\u00E9/gX\u00CF\x10\u00CF\u00D83\u00E3\u00B6\x13\u00CB)\u00C4i\u009DS\u009B\u00D3Gg\x17g\u00B9s\u0083\u00F3\u0088\u008B\u0089K\u0082\u00CB.\u0097>.\u009B\x1B\u00C6\u00DD\u00C8\u00BD\u00E4Jt\u00F5q]\u00E1z\u00D2\u00F5\u009D\u009B\u00B3\u009B\u00C2\u00ED\u00A8\u00DB\u00AF\u00EE6\u00EEi\u00EE\u0087\u00DC\u009F\u00CC4\u009F)\u009EY3s\u00D0\u00C3\u00C8C\u00E0Q\u00E5\u00D1?\x0B\u009F\u00950k\u00DF\u00AC~OCO\u0081g\u00B5\u00E7#/c/\u0091W\u00AD\u00D7\u00B0\u00B7\u00A5w\u00AA\u00F7a\u00EF\x17>\u00F6>r\u009F\u00E3>\u00E3<7\u00DE2\u00DEY_\u00CC7\u00C0\u00B7\u00C8\u00B7\u00CBO\u00C3o\u009E_\u0085\u00DFC\x7F#\u00FFd\u00FFz\u00FF\u00D1\x00\u00A7\u0080%\x01g\x03\u0089\u0081A\u0081[\x02\u00FB\u00F8z|!\u00BF\u008E?:\u00DBe\u00F6\u00B2\u00D9\u00EDA\u008C\u00A0\u00B9A\x15A\u008F\u0082\u00AD\u0082\u00E5\u00C1\u00AD!h\u00C8\u00EC\u0090\u00AD!\u00F7\u00E7\u0098\u00CE\u0091\u00CEi\x0E\u0085P~\u00E8\u00D6\u00D0\x07a\u00E6a\u008B\u00C3~\f'\u0085\u0087\u0085W\u0086?\u008Ep\u0088X\x1A\u00D11\u00975w\u00D1\u00DCCs\u00DFD\u00FAD\u0096D\u00DE\u009Bg1O9\u00AF-J5*>\u00AA.j<\u00DA7\u00BA4\u00BA?\u00C6.fY\u00CC\u00D5X\u009DXIlK\x1C9.*\u00AE6nl\u00BE\u00DF\u00FC\u00ED\u00F3\u0087\u00E2\u009D\u00E2\x0B\u00E3{\x17\u0098/\u00C8]py\u00A1\u00CE\u00C2\u00F4\u0085\u00A7\x16\u00A9.\x12,:\u0096@L\u0088N8\u0094\u00F0A\x10*\u00A8\x16\u008C%\u00F2\x13w%\u008E\ny\u00C2\x1D\u00C2g\"/\u00D16\u00D1\u0088\u00D8C\\*\x1EN\u00F2H*Mz\u0092\u00EC\u0091\u00BC5y$\u00C53\u00A5,\u00E5\u00B9\u0084'\u00A9\u0090\u00BCL\rL\u00DD\u009B:\u009E\x16\u009Av m2=:\u00BD1\u0083\u0092\u0091\u0090qB\u00AA!M\u0093\u00B6g\u00EAg\u00E6fv\u00CB\u00ACe\u0085\u00B2\u00FE\u00C5n\u008B\u00B7/\x1E\u0095\x07\u00C9k\u00B3\u0090\u00AC\x05Y-\n\u00B6B\u00A6\u00E8TZ(\u00D7*\x07\u00B2geWf\u00BF\u00CD\u0089\u00CA9\u0096\u00AB\u009E+\u00CD\u00ED\u00CC\u00B3\u00CA\u00DB\u00907\u009C\u00EF\u009F\u00FF\u00ED\x12\u00C2\x12\u00E1\u0092\u00B6\u00A5\u0086KW-\x1DX\u00E6\u00BD\u00ACj9\u00B2<qy\u00DB\n\u00E3\x15\x05+\u0086V\x06\u00AC<\u00B8\u008A\u00B6*m\u00D5O\u00AB\u00EDW\u0097\u00AE~\u00BD&zMk\u0081^\u00C1\u00CA\u0082\u00C1\u00B5\x01k\u00EB\x0BU\n\u00E5\u0085}\u00EB\u00DC\u00D7\u00ED]OX/Y\u00DF\u00B5a\u00FA\u0086\u009D\x1B>\x15\u0089\u008A\u00AE\x14\u00DB\x17\u0097\x15\x7F\u00D8(\u00DCx\u00E5\x1B\u0087o\u00CA\u00BF\u0099\u00DC\u0094\u00B4\u00A9\u00AB\u00C4\u00B9d\u00CFf\u00D2f\u00E9\u00E6\u00DE-\u009E[\x0E\u0096\u00AA\u0097\u00E6\u0097\x0En\r\u00D9\u00DA\u00B4\r\u00DFV\u00B4\u00ED\u00F5\u00F6E\u00DB/\u0097\u00CD(\u00DB\u00BB\u0083\u00B6C\u00B9\u00A3\u00BF<\u00B8\u00BCe\u00A7\u00C9\u00CE\u00CD;?T\u00A4T\u00F4T\u00FAT6\u00EE\u00D2\u00DD\u00B5a\u00D7\u00F8n\u00D1\u00EE\x1B{\u00BC\u00F64\u00EC\u00D5\u00DB[\u00BC\u00F7\u00FD>\u00C9\u00BE\u00DBU\x01UM\u00D5f\u00D5e\u00FBI\u00FB\u00B3\u00F7?\u00AE\u0089\u00AA\u00E9\u00F8\u0096\u00FBm]\u00ADNmq\u00ED\u00C7\x03\u00D2\x03\u00FD\x07#\x0E\u00B6\u00D7\u00B9\u00D4\u00D5\x1D\u00D2=TR\u008F\u00D6+\u00EBG\x0E\u00C7\x1F\u00BE\u00FE\u009D\u00EFw-\r6\rU\u008D\u009C\u00C6\u00E2#pDy\u00E4\u00E9\u00F7\t\u00DF\u00F7\x1E\r:\u00DAv\u008C{\u00AC\u00E1\x07\u00D3\x1Fv\x1Dg\x1D/jB\u009A\u00F2\u009AF\u009BS\u009A\u00FB[b[\u00BAO\u00CC>\u00D1\u00D6\u00EA\u00DEz\u00FCG\u00DB\x1F\x0F\u009C4<YyJ\u00F3T\u00C9i\u00DA\u00E9\u0082\u00D3\u0093g\u00F2\u00CF\u008C\u009D\u0095\u009D}~.\u00F9\u00DC`\u00DB\u00A2\u00B6{\u00E7c\u00CE\u00DFj\x0Fo\u00EF\u00BA\x10t\u00E1\u00D2E\u00FF\u008B\u00E7;\u00BC;\u00CE\\\u00F2\u00B8t\u00F2\u00B2\u00DB\u00E5\x13W\u00B8W\u009A\u00AF:_m\u00EAt\u00EA<\u00FE\u0093\u00D3O\u00C7\u00BB\u009C\u00BB\u009A\u00AE\u00B9\\k\u00B9\u00EEz\u00BD\u00B5{f\u00F7\u00E9\x1B\u009E7\u00CE\u00DD\u00F4\u00BDy\u00F1\x16\u00FF\u00D6\u00D5\u009E9=\u00DD\u00BD\u00F3zo\u00F7\u00C5\u00F7\u00F5\u00DF\x16\u00DD~r'\u00FD\u00CE\u00CB\u00BB\u00D9w'\u00EE\u00AD\u00BCO\u00BC_\u00F4@\u00EDA\u00D9C\u00DD\u0087\u00D5?[\u00FE\u00DC\u00D8\u00EF\u00DC\x7Fj\u00C0w\u00A0\u00F3\u00D1\u00DCG\u00F7\x06\u0085\u0083\u00CF\u00FE\u0091\u00F5\u008F\x0FC\x05\u008F\u0099\u008F\u00CB\u0086\r\u0086\u00EB\u009E8>99\u00E2?r\u00FD\u00E9\u00FC\u00A7C\u00CFd\u00CF&\u009E\x17\u00FE\u00A2\u00FE\u00CB\u00AE\x17\x16/~\u00F8\u00D5\u00EB\u00D7\u00CE\u00D1\u0098\u00D1\u00A1\u0097\u00F2\u0097\u0093\u00BFm|\u00A5\u00FD\u00EA\u00C0\u00EB\x19\u00AF\u00DB\u00C6\u00C2\u00C6\x1E\u00BE\u00C9x31^\u00F4V\u00FB\u00ED\u00C1w\u00DCw\x1D\u00EF\u00A3\u00DF\x0FO\u00E4| \x7F(\u00FFh\u00F9\u00B1\u00F5S\u00D0\u00A7\u00FB\u0093\x19\u0093\u0093\u00FF\x04\x03\u0098\u00F3\u00FCc3-\u00DB\x00\x00\x00 cHRM\x00\x00z%\x00\x00\u0080\u0083\x00\x00\u00F9\u00FF\x00\x00\u0080\u00E9\x00\x00u0\x00\x00\u00EA`\x00\x00:\u0098\x00\x00\x17o\u0092_\u00C5F\x00\x00\x01\x19IDATx\u00DA\u009C\u0093=j\u00C3@\x10\u0085\u009FL\x02QH\u0088b\u0084j7*\u0096\u00B8\u008A\u00BB\u00DCD'Q\u00A7B\u00A8s\u00CE\x10\u00E4+\x04\u00DF `\u00A5\x17b\x0BA\u009At\u008E\n\u00BB\x12\u00EC\u00CFl\u009AXx-E\x18\x0F\fL1\u00DF\u00BE\u00B7\u00CB[\u00C7\x18\u0083K\u00EA\u00EA0p\u00CE\x1F\u00CF\u00D87\u008C\u00B1\x1D\x008\x07\u00C50\f\u00CF\u0091\u00DE\u00D7u\u00EDY\u008AA\x10 I\u0092Q*M\u00D3\u00BEU\u00AD5\u00A4\u0094\u00A3\u00A0\u00D6z\u00D2\x03\u00A5R\x10B\u008C\u0082R\u00A9\u00FB\x1EHDPJ\u008D\u0082D4`U)dYf-\u00C6ql[=:\u00B8\x03\u00A7S\x1F\u00F3\u00F9\x13\x16\u008Bg\x00\u00C0r\u00F9\u00DA\u00B3\u00AE\u0094\u00EE\u00E6\u00EE\u00B2y\u00FE6+\u00CB\x12E\u00F1\t)%\u0088\bRJ\u00AB\u008F\u00ADv`\u00DB\u00B6\u00DF\u00ABU>\u00AB\u00AA\n\u009BM\x01\"\x03!\u0084\u00D5D\x06\u009C\u00F3\x07+\x00\x7F\u00E9\u0099\u00B8\u00EE\u00EDK\x14E\x1F\u00DB\u00ED\u00CF\u00E0\x03\u00AD\u00D7\u00EF\x1Ecl\u00EF\u009Cf\u0095s\u00EE\u00F9\u00BE\u00FF\x05\u00C0\x05ps\n6M3\f\u00FEW\u009C\u00F3;\x00\u00D7\x00v\u008C1\u00E3\\\u00FA;~\x07\x00J\u008C\u009E\be}\u00A5O\x00\x00\x00\x00IEND\u00AEB`\u0082";
scriptMng.files["/options.png"] = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x0E\x00\x00\x00\x10\b\x06\x00\x00\x00&\u0094N:\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\nOiCCPPhotoshop ICC profile\x00\x00x\u00DA\u009DSgTS\u00E9\x16=\u00F7\u00DE\u00F4BK\u0088\u0080\u0094KoR\x15\b RB\u008B\u0080\x14\u0091&*!\t\x10J\u0088!\u00A1\u00D9\x15Q\u00C1\x11EE\x04\x1B\u00C8\u00A0\u0088\x03\u008E\u008E\u0080\u008C\x15Q,\f\u008A\n\u00D8\x07\u00E4!\u00A2\u008E\u0083\u00A3\u0088\u008A\u00CA\u00FB\u00E1{\u00A3k\u00D6\u00BC\u00F7\u00E6\u00CD\u00FE\u00B5\u00D7>\u00E7\u00AC\u00F3\u009D\u00B3\u00CF\x07\u00C0\b\f\u0096H3Q5\u0080\f\u00A9B\x1E\x11\u00E0\u0083\u00C7\u00C4\u00C6\u00E1\u00E4.@\u0081\n$p\x00\x10\b\u00B3d!s\u00FD#\x01\x00\u00F8~<<+\"\u00C0\x07\u00BE\x00\x01x\u00D3\x0B\b\x00\u00C0M\u009B\u00C00\x1C\u0087\u00FF\x0F\u00EAB\u0099\\\x01\u0080\u0084\x01\u00C0t\u00918K\b\u0080\x14\x00@z\u008EB\u00A6\x00@F\x01\u0080\u009D\u0098&S\x00\u00A0\x04\x00`\u00CBcb\u00E3\x00P-\x00`'\x7F\u00E6\u00D3\x00\u0080\u009D\u00F8\u0099{\x01\x00[\u0094!\x15\x01\u00A0\u0091\x00 \x13e\u0088D\x00h;\x00\u00AC\u00CFV\u008AE\x00X0\x00\x14fK\u00C49\x00\u00D8-\x000IWfH\x00\u00B0\u00B7\x00\u00C0\u00CE\x10\x0B\u00B2\x00\b\f\x000Q\u0088\u0085)\x00\x04{\x00`\u00C8##x\x00\u0084\u0099\x00\x14F\u00F2W<\u00F1+\u00AE\x10\u00E7*\x00\x00x\u0099\u00B2<\u00B9$9E\u0081[\b-q\x07WW.\x1E(\u00CEI\x17+\x146a\x02a\u009A@.\u00C2y\u0099\x192\u00814\x0F\u00E0\u00F3\u00CC\x00\x00\u00A0\u0091\x15\x11\u00E0\u0083\u00F3\u00FDx\u00CE\x0E\u00AE\u00CE\u00CE6\u008E\u00B6\x0E_-\u00EA\u00BF\x06\u00FF\"bb\u00E3\u00FE\u00E5\u00CF\u00ABp@\x00\x00\u00E1t~\u00D1\u00FE,/\u00B3\x1A\u0080;\x06\u0080m\u00FE\u00A2%\u00EE\x04h^\x0B\u00A0u\u00F7\u008Bf\u00B2\x0F@\u00B5\x00\u00A0\u00E9\u00DAW\u00F3p\u00F8~<<E\u00A1\u0090\u00B9\u00D9\u00D9\u00E5\u00E4\u00E4\u00D8J\u00C4B[a\u00CAW}\u00FEg\u00C2_\u00C0W\u00FDl\u00F9~<\u00FC\u00F7\u00F5\u00E0\u00BE\u00E2$\u00812]\u0081G\x04\u00F8\u00E0\u00C2\u00CC\u00F4L\u00A5\x1C\u00CF\u0092\t\u0084b\u00DC\u00E6\u008FG\u00FC\u00B7\x0B\u00FF\u00FC\x1D\u00D3\"\u00C4Ib\u00B9X*\x14\u00E3Q\x12q\u008ED\u009A\u008C\u00F32\u00A5\"\u0089B\u0092)\u00C5%\u00D2\u00FFd\u00E2\u00DF,\u00FB\x03>\u00DF5\x00\u00B0j>\x01{\u0091-\u00A8]c\x03\u00F6K'\x10Xt\u00C0\u00E2\u00F7\x00\x00\u00F2\u00BBo\u00C1\u00D4(\b\x03\u0080h\u0083\u00E1\u00CFw\u00FF\u00EF?\u00FDG\u00A0%\x00\u0080fI\u0092q\x00\x00^D$.T\u00CA\u00B3?\u00C7\b\x00\x00D\u00A0\u0081*\u00B0A\x1B\u00F4\u00C1\x18,\u00C0\x06\x1C\u00C1\x05\u00DC\u00C1\x0B\u00FC`6\u0084B$\u00C4\u00C2B\x10B\nd\u0080\x1Cr`)\u00AC\u0082B(\u0086\u00CD\u00B0\x1D*`/\u00D4@\x1D4\u00C0Qh\u0086\u0093p\x0E.\u00C2U\u00B8\x0E=p\x0F\u00FAa\b\u009E\u00C1(\u00BC\u0081\t\x04A\u00C8\b\x13a!\u00DA\u0088\x01b\u008AX#\u008E\b\x17\u0099\u0085\u00F8!\u00C1H\x04\x12\u008B$ \u00C9\u0088\x14Q\"K\u00915H1R\u008AT UH\x1D\u00F2=r\x029\u0087\\F\u00BA\u0091;\u00C8\x002\u0082\u00FC\u0086\u00BCG1\u0094\u0081\u00B2Q=\u00D4\f\u00B5C\u00B9\u00A87\x1A\u0084F\u00A2\x0B\u00D0dt1\u009A\u008F\x16\u00A0\u009B\u00D0r\u00B4\x1A=\u008C6\u00A1\u00E7\u00D0\u00ABh\x0F\u00DA\u008F>C\u00C70\u00C0\u00E8\x18\x073\u00C4l0.\u00C6\u00C3B\u00B18,\t\u0093c\u00CB\u00B1\"\u00AC\f\u00AB\u00C6\x1A\u00B0V\u00AC\x03\u00BB\u0089\u00F5c\u00CF\u00B1w\x04\x12\u0081E\u00C0\t6\x04wB a\x1EAHXLXN\u00D8H\u00A8 \x1C$4\x11\u00DA\t7\t\x03\u0084Q\u00C2'\"\u0093\u00A8K\u00B4&\u00BA\x11\u00F9\u00C4\x18b21\u0087XH,#\u00D6\x12\u008F\x13/\x10{\u0088C\u00C47$\x12\u0089C2'\u00B9\u0090\x02I\u00B1\u00A4T\u00D2\x12\u00D2F\u00D2nR#\u00E9,\u00A9\u009B4H\x1A#\u0093\u00C9\u00DAdk\u00B2\x079\u0094, +\u00C8\u0085\u00E4\u009D\u00E4\u00C3\u00E43\u00E4\x1B\u00E4!\u00F2[\n\u009Db@q\u00A4\u00F8S\u00E2(R\u00CAjJ\x19\u00E5\x10\u00E54\u00E5\x06e\u00982AU\u00A3\u009AR\u00DD\u00A8\u00A1T\x115\u008FZB\u00AD\u00A1\u00B6R\u00AFQ\u0087\u00A8\x134u\u009A9\u00CD\u0083\x16IK\u00A5\u00AD\u00A2\u0095\u00D3\x1Ah\x17h\u00F7i\u00AF\u00E8t\u00BA\x11\u00DD\u0095\x1EN\u0097\u00D0W\u00D2\u00CB\u00E9G\u00E8\u0097\u00E8\x03\u00F4w\f\r\u0086\x15\u0083\u00C7\u0088g(\x19\u009B\x18\x07\x18g\x19w\x18\u00AF\u0098L\u00A6\x19\u00D3\u008B\x19\u00C7T071\u00EB\u0098\u00E7\u0099\x0F\u0099oUX*\u00B6*|\x15\u0091\u00CA\n\u0095J\u0095&\u0095\x1B*/T\u00A9\u00AA\u00A6\u00AA\u00DE\u00AA\x0BU\u00F3U\u00CBT\u008F\u00A9^S}\u00AEFU3S\u00E3\u00A9\t\u00D4\u0096\u00ABU\u00AA\u009DP\u00EBS\x1BSg\u00A9;\u00A8\u0087\u00AAg\u00A8oT?\u00A4~Y\u00FD\u0089\x06Y\u00C3L\u00C3OC\u00A4Q\u00A0\u00B1_\u00E3\u00BC\u00C6 \x0Bc\x19\u00B3x,!k\r\u00AB\u0086u\u00815\u00C4&\u00B1\u00CD\u00D9|v*\u00BB\u0098\u00FD\x1D\u00BB\u008B=\u00AA\u00A9\u00A19C3J3W\u00B3R\u00F3\u0094f?\x07\u00E3\u0098q\u00F8\u009CtN\t\u00E7(\u00A7\u0097\u00F3~\u008A\u00DE\x14\u00EF)\u00E2)\x1B\u00A64L\u00B91e\\k\u00AA\u0096\u0097\u0096X\u00ABH\u00ABQ\u00ABG\u00EB\u00BD6\u00AE\u00ED\u00A7\u009D\u00A6\u00BDE\u00BBY\u00FB\u0081\x0EA\u00C7J'\\'Gg\u008F\u00CE\x05\u009D\u00E7S\u00D9S\u00DD\u00A7\n\u00A7\x16M=:\u00F5\u00AE.\u00AAk\u00A5\x1B\u00A1\u00BBDw\u00BFn\u00A7\u00EE\u0098\u009E\u00BE^\u0080\u009ELo\u00A7\u00DEy\u00BD\u00E7\u00FA\x1C}/\u00FDT\u00FDm\u00FA\u00A7\u00F5G\fX\x06\u00B3\f$\x06\u00DB\f\u00CE\x18<\u00C55qo<\x1D/\u00C7\u00DB\u00F1QC]\u00C3@C\u00A5a\u0095a\u0097\u00E1\u0084\u0091\u00B9\u00D1<\u00A3\u00D5F\u008DF\x0F\u008Ci\u00C6\\\u00E3$\u00E3m\u00C6m\u00C6\u00A3&\x06&!&KM\u00EAM\u00EE\u009ARM\u00B9\u00A6)\u00A6;L;L\u00C7\u00CD\u00CC\u00CD\u00A2\u00CD\u00D6\u00995\u009B=1\u00D72\u00E7\u009B\u00E7\u009B\u00D7\u009B\u00DF\u00B7`ZxZ,\u00B6\u00A8\u00B6\u00B8eI\u00B2\u00E4Z\u00A6Y\u00EE\u00B6\u00BCn\u0085Z9Y\u00A5XUZ]\u00B3F\u00AD\u009D\u00AD%\u00D6\u00BB\u00AD\u00BB\u00A7\x11\u00A7\u00B9N\u0093N\u00AB\u009E\u00D6g\u00C3\u00B0\u00F1\u00B6\u00C9\u00B6\u00A9\u00B7\x19\u00B0\u00E5\u00D8\x06\u00DB\u00AE\u00B6m\u00B6}agb\x17g\u00B7\u00C5\u00AE\u00C3\u00EE\u0093\u00BD\u0093}\u00BA}\u008D\u00FD=\x07\r\u0087\u00D9\x0E\u00AB\x1DZ\x1D~s\u00B4r\x14:V:\u00DE\u009A\u00CE\u009C\u00EE?}\u00C5\u00F4\u0096\u00E9/gX\u00CF\x10\u00CF\u00D83\u00E3\u00B6\x13\u00CB)\u00C4i\u009DS\u009B\u00D3Gg\x17g\u00B9s\u0083\u00F3\u0088\u008B\u0089K\u0082\u00CB.\u0097>.\u009B\x1B\u00C6\u00DD\u00C8\u00BD\u00E4Jt\u00F5q]\u00E1z\u00D2\u00F5\u009D\u009B\u00B3\u009B\u00C2\u00ED\u00A8\u00DB\u00AF\u00EE6\u00EEi\u00EE\u0087\u00DC\u009F\u00CC4\u009F)\u009EY3s\u00D0\u00C3\u00C8C\u00E0Q\u00E5\u00D1?\x0B\u009F\u00950k\u00DF\u00AC~OCO\u0081g\u00B5\u00E7#/c/\u0091W\u00AD\u00D7\u00B0\u00B7\u00A5w\u00AA\u00F7a\u00EF\x17>\u00F6>r\u009F\u00E3>\u00E3<7\u00DE2\u00DEY_\u00CC7\u00C0\u00B7\u00C8\u00B7\u00CBO\u00C3o\u009E_\u0085\u00DFC\x7F#\u00FFd\u00FFz\u00FF\u00D1\x00\u00A7\u0080%\x01g\x03\u0089\u0081A\u0081[\x02\u00FB\u00F8z|!\u00BF\u008E?:\u00DBe\u00F6\u00B2\u00D9\u00EDA\u008C\u00A0\u00B9A\x15A\u008F\u0082\u00AD\u0082\u00E5\u00C1\u00AD!h\u00C8\u00EC\u0090\u00AD!\u00F7\u00E7\u0098\u00CE\u0091\u00CEi\x0E\u0085P~\u00E8\u00D6\u00D0\x07a\u00E6a\u008B\u00C3~\f'\u0085\u0087\u0085W\u0086?\u008Ep\u0088X\x1A\u00D11\u00975w\u00D1\u00DCCs\u00DFD\u00FAD\u0096D\u00DE\u009Bg1O9\u00AF-J5*>\u00AA.j<\u00DA7\u00BA4\u00BA?\u00C6.fY\u00CC\u00D5X\u009DXIlK\x1C9.*\u00AE6nl\u00BE\u00DF\u00FC\u00ED\u00F3\u0087\u00E2\u009D\u00E2\x0B\u00E3{\x17\u0098/\u00C8]py\u00A1\u00CE\u00C2\u00F4\u0085\u00A7\x16\u00A9.\x12,:\u0096@L\u0088N8\u0094\u00F0A\x10*\u00A8\x16\u008C%\u00F2\x13w%\u008E\ny\u00C2\x1D\u00C2g\"/\u00D16\u00D1\u0088\u00D8C\\*\x1EN\u00F2H*Mz\u0092\u00EC\u0091\u00BC5y$\u00C53\u00A5,\u00E5\u00B9\u0084'\u00A9\u0090\u00BCL\rL\u00DD\u009B:\u009E\x16\u009Av m2=:\u00BD1\u0083\u0092\u0091\u0090qB\u00AA!M\u0093\u00B6g\u00EAg\u00E6fv\u00CB\u00ACe\u0085\u00B2\u00FE\u00C5n\u008B\u00B7/\x1E\u0095\x07\u00C9k\u00B3\u0090\u00AC\x05Y-\n\u00B6B\u00A6\u00E8TZ(\u00D7*\x07\u00B2geWf\u00BF\u00CD\u0089\u00CA9\u0096\u00AB\u009E+\u00CD\u00ED\u00CC\u00B3\u00CA\u00DB\u00907\u009C\u00EF\u009F\u00FF\u00ED\x12\u00C2\x12\u00E1\u0092\u00B6\u00A5\u0086KW-\x1DX\u00E6\u00BD\u00ACj9\u00B2<qy\u00DB\n\u00E3\x15\x05+\u0086V\x06\u00AC<\u00B8\u008A\u00B6*m\u00D5O\u00AB\u00EDW\u0097\u00AE~\u00BD&zMk\u0081^\u00C1\u00CA\u0082\u00C1\u00B5\x01k\u00EB\x0BU\n\u00E5\u0085}\u00EB\u00DC\u00D7\u00ED]OX/Y\u00DF\u00B5a\u00FA\u0086\u009D\x1B>\x15\u0089\u008A\u00AE\x14\u00DB\x17\u0097\x15\x7F\u00D8(\u00DCx\u00E5\x1B\u0087o\u00CA\u00BF\u0099\u00DC\u0094\u00B4\u00A9\u00AB\u00C4\u00B9d\u00CFf\u00D2f\u00E9\u00E6\u00DE-\u009E[\x0E\u0096\u00AA\u0097\u00E6\u0097\x0En\r\u00D9\u00DA\u00B4\r\u00DFV\u00B4\u00ED\u00F5\u00F6E\u00DB/\u0097\u00CD(\u00DB\u00BB\u0083\u00B6C\u00B9\u00A3\u00BF<\u00B8\u00BCe\u00A7\u00C9\u00CE\u00CD;?T\u00A4T\u00F4T\u00FAT6\u00EE\u00D2\u00DD\u00B5a\u00D7\u00F8n\u00D1\u00EE\x1B{\u00BC\u00F64\u00EC\u00D5\u00DB[\u00BC\u00F7\u00FD>\u00C9\u00BE\u00DBU\x01UM\u00D5f\u00D5e\u00FBI\u00FB\u00B3\u00F7?\u00AE\u0089\u00AA\u00E9\u00F8\u0096\u00FBm]\u00ADNmq\u00ED\u00C7\x03\u00D2\x03\u00FD\x07#\x0E\u00B6\u00D7\u00B9\u00D4\u00D5\x1D\u00D2=TR\u008F\u00D6+\u00EBG\x0E\u00C7\x1F\u00BE\u00FE\u009D\u00EFw-\r6\rU\u008D\u009C\u00C6\u00E2#pDy\u00E4\u00E9\u00F7\t\u00DF\u00F7\x1E\r:\u00DAv\u008C{\u00AC\u00E1\x07\u00D3\x1Fv\x1Dg\x1D/jB\u009A\u00F2\u009AF\u009BS\u009A\u00FB[b[\u00BAO\u00CC>\u00D1\u00D6\u00EA\u00DEz\u00FCG\u00DB\x1F\x0F\u009C4<YyJ\u00F3T\u00C9i\u00DA\u00E9\u0082\u00D3\u0093g\u00F2\u00CF\u008C\u009D\u0095\u009D}~.\u00F9\u00DC`\u00DB\u00A2\u00B6{\u00E7c\u00CE\u00DFj\x0Fo\u00EF\u00BA\x10t\u00E1\u00D2E\u00FF\u008B\u00E7;\u00BC;\u00CE\\\u00F2\u00B8t\u00F2\u00B2\u00DB\u00E5\x13W\u00B8W\u009A\u00AF:_m\u00EAt\u00EA<\u00FE\u0093\u00D3O\u00C7\u00BB\u009C\u00BB\u009A\u00AE\u00B9\\k\u00B9\u00EEz\u00BD\u00B5{f\u00F7\u00E9\x1B\u009E7\u00CE\u00DD\u00F4\u00BDy\u00F1\x16\u00FF\u00D6\u00D5\u009E9=\u00DD\u00BD\u00F3zo\u00F7\u00C5\u00F7\u00F5\u00DF\x16\u00DD~r'\u00FD\u00CE\u00CB\u00BB\u00D9w'\u00EE\u00AD\u00BCO\u00BC_\u00F4@\u00EDA\u00D9C\u00DD\u0087\u00D5?[\u00FE\u00DC\u00D8\u00EF\u00DC\x7Fj\u00C0w\u00A0\u00F3\u00D1\u00DCG\u00F7\x06\u0085\u0083\u00CF\u00FE\u0091\u00F5\u008F\x0FC\x05\u008F\u0099\u008F\u00CB\u0086\r\u0086\u00EB\u009E8>99\u00E2?r\u00FD\u00E9\u00FC\u00A7C\u00CFd\u00CF&\u009E\x17\u00FE\u00A2\u00FE\u00CB\u00AE\x17\x16/~\u00F8\u00D5\u00EB\u00D7\u00CE\u00D1\u0098\u00D1\u00A1\u0097\u00F2\u0097\u0093\u00BFm|\u00A5\u00FD\u00EA\u00C0\u00EB\x19\u00AF\u00DB\u00C6\u00C2\u00C6\x1E\u00BE\u00C9x31^\u00F4V\u00FB\u00ED\u00C1w\u00DCw\x1D\u00EF\u00A3\u00DF\x0FO\u00E4| \x7F(\u00FFh\u00F9\u00B1\u00F5S\u00D0\u00A7\u00FB\u0093\x19\u0093\u0093\u00FF\x04\x03\u0098\u00F3\u00FCc3-\u00DB\x00\x00\x00 cHRM\x00\x00z%\x00\x00\u0080\u0083\x00\x00\u00F9\u00FF\x00\x00\u0080\u00E9\x00\x00u0\x00\x00\u00EA`\x00\x00:\u0098\x00\x00\x17o\u0092_\u00C5F\x00\x00\x00\u00AEIDATx\u00DA\u00BC\u00921\n\u00C4 \x14D\u00C7%\u00A7\u00B1\u00CF\rL'\u00C4\"\u0082\u00C7\u00F02\u009E\"\u008D\u0088\u009DW\u00CA\x11\u00A2n\x11\x14\x12w!qa\x07,\u00FC\u00BE\u00F1\u00FB\x07\u00891&;\u00E7\u00F0DJ)\x10\u00C6XF\u0087\u0086\u0094\x12\u00BA\u008C1F\x00\u00C0\u00BA\u00AE\u00CD\u00A1\u0094\u00B2\u00A9K)\x0Fc\u00CE\u00C7K\u0097e\u00F9x\u00F3\u00B6m\u00A7}\u00E1\u0087}\u00DF\x01\x00\u00D6\u00DA\u00C6$\u0084hj\u0085\u00AF\x1D\u00E7y\u00BE5[\u00EDXf\u00F4\u00DE7\x10\u00E7\u00BC\u00A9\x15\u009E\u008C\u00E3\u0098\x7FJ\u00B5\u00DB\x18B\u00B8e\u0098\u00A6\u00E9\u00FC\x01\u00AE\u00B1\x7FS\u00E1k\u00AAwUxB)\u00FDo8/\u00AD5RJ\u008F\u0096\u00D6\x1A\u00EF\x01\x00\u00CC\u00CCzLN\u00F4\u0093_\x00\x00\x00\x00IEND\u00AEB`\u0082";
}
	//Récup des images
	{
	//	>> Utils
	function dialog_preferences_general()
	{
		//	Valide au moins depuis CS4,
		app.executeCommand(2359);
	}
	function checkFile(name, content)
	{
		var file = new File(name);
		var fileContent = "";


		if (file.exists)
		{
			file.encoding = "BINARY"; 
			if (file.open("r", "TEXT", "????"))
			{
				fileContent = file.read();

				file.close(); 
			}
		}
		else
		{
			var folder = new Folder(file.path);
			if (!folder.exists)
			{
				folder.create();
			}
		}

		var success = fileContent == content;

		if (!success)
		{
			file.encoding = "BINARY"; 
			if (file.open("w"))
			{
				success = file.write(content);

				file.close(); 
			}
		}

		return success;
	}
	//	<< Utils

	//préférence pour ne demander qu'une seule fois à accéder aux fichiers et au réseau
	if (! app.settings.haveSetting("Dusearch","prefFileNetwork")) app.settings.saveSetting("Dusearch","prefFileNetwork","false");
	
	//	On va devoir écrire les fichiers d'image, donc ça ne sert à rien de continuer si on ne peux pas:
	if (app.preferences.getPrefAsLong("Main Pref Section","Pref_SCRIPTING_FILE_NETWORK_SECURITY") != 1 && !eval(app.settings.getSetting("Dusearch","prefFileNetwork")))
	{
		alert("This script will work better if it is able to write files and access the network,\nplease check \"Authorize Scripts to write files (...)\" in the following dialog", "DuSearch");

		//	Ouvre les préférences générales pour laisser l'utilisateur autoriser les scripts
		dialog_preferences_general();
		
		app.settings.saveSetting("Dusearch","prefFileNetwork","true");
	}

	if (app.preferences.getPrefAsLong("Main Pref Section","Pref_SCRIPTING_FILE_NETWORK_SECURITY") == 1)
	{
	var imgFolder = new Folder(Folder.userData.fsName + "/Dusearch").fsName;
	
		for (var k in scriptMng.files)
		{
			if (scriptMng.files.hasOwnProperty(k))
			{
				if (!checkFile(imgFolder + k, scriptMng.files[k]))
				{
					alert("Error writing file: " + k);
				}
			}
		}
	}
}
	

    //===============================================
    //================= VARIABLES ET SETTINGS ========
    //===============================================
	
	//version
	var version = "1.0";
        
    //settings :
    if (! app.settings.haveSetting("Dusearch","onlyAEP")) app.settings.saveSetting("Dusearch","onlyAEP","false");
    if (! app.settings.haveSetting("Dusearch","searchFileNames")) app.settings.saveSetting("Dusearch","searchFileNames","true");
    if (! app.settings.haveSetting("Dusearch","searchInsideAEP")) app.settings.saveSetting("Dusearch","searchInsideAEP","true");
    if (! app.settings.haveSetting("Dusearch","searchItems")) app.settings.saveSetting("Dusearch","searchItems","true");
    if (! app.settings.haveSetting("Dusearch","searchLayers")) app.settings.saveSetting("Dusearch","searchLayers","true");
    if (! app.settings.haveSetting("Dusearch","searchTextLayers")) app.settings.saveSetting("Dusearch","searchTextLayers","true");
    if (! app.settings.haveSetting("Dusearch","folder")) app.settings.saveSetting("Dusearch","folder","Search Folder");
    if (! app.settings.haveSetting("Dusearch","caseSensitive")) app.settings.saveSetting("Dusearch","caseSensitive","false");
    if (! app.settings.haveSetting("Dusearch","subFolders")) app.settings.saveSetting("Dusearch","subFolders","true");
	if (! app.settings.haveSetting("Dusearch","quickMode")) app.settings.saveSetting("Dusearch","quickMode","true");
    
    //===============================================
    //================= FONCTIONS ==================
    //===============================================
    
    //choisir le dossier de recherche
    function choixDossier() {
        var dossier = Folder.selectDialog("Please select the folder where you want to search");
        if ( dossier == null ) return;
        cheminDossier.text = dossier.fsName;
		app.settings.saveSetting("Dusearch","folder",dossier.fsName);
        }
    
    //fonction récursive qui donne tous les AEP d'un dossier et de ses sous dossiers
    function findAEP(dossier,recursive) {
        //un tableau qui récupèrera les AEP trouvés
        var aep = [];
        //boucle sur le contenu du dossier
        var contenu = dossier.getFiles();
        if (contenu.length != 0) {
            for (i in contenu)
            {
                //si on est sur un fichier
                if (contenu[i] instanceof File) {
                    if (contenu[i].name.substr(-4).toLowerCase() == ".aep") aep.push(contenu[i]); //si on est sur un aep, ajouter au tableau des résultats
                    else if (contenu[i].name.substr(-4).toLowerCase() == ".aet") aep.push(contenu[i]); //si on est sur un aet (template after)
                    else if (contenu[i].name.substr(-5).toLowerCase() == ".aepx") aep.push(contenu[i]); //si on est sur un aepx (aep xml)
                    }
                //si on est sur un dossier
                if (contenu[i] instanceof Folder && recursive) {
                    var aepEnfant = findAEP(contenu[i],true); //relancer la fonction elle même sur le dossier enfant (principe de la récursivité), et récupérer le tableau des aep trouvé dans les enfants
                    aep = aep.concat(aepEnfant); //ajouter le tableau des aep contenus dans les sous dossiers dans le tableau des aep du dossier actuel
                    }
                }
            }
       //on retourne le tableau des aep
       return aep;
        }
    //fonction récursive qui donne tous les fichiers SAUF LES AEP d'un dossier et de ses sous dossiers
    function findFiles(dossier,recursive) {
        //un tableau qui récupèrera les AEP trouvés
        var fichiers = [];
        //boucle sur le contenu du dossier
        var contenu = dossier.getFiles();
        if (contenu.length != 0) {
            for (i in contenu)
            {
                //si on est sur un fichier
                if (contenu[i] instanceof File) {
                    var fin = contenu[i].name.substr(-4).toLowerCase(); //récupérer les 4 derniers caractères du nom de fichier
                    if (fin != ".aep" && fin != ".aet" && fin != "aepx") fichiers.push(contenu[i]); //si on est sur un fichier, ajouter au tableau des résultats
                    }
                //si on est sur un dossier
                if (contenu[i] instanceof Folder && recursive) {
                    var fichiersEnfant = findFiles(contenu[i],true); //relancer la fonction elle même sur le dossier enfant (principe de la récursivité), et récupérer le tableau des fichiers trouvé dans les enfants
                    fichiers = fichiers.concat(fichiersEnfant); //ajouter le tableau des fichiers contenus dans les sous dossiers dans le tableau des fichiers du dossier actuel
                    }
                }
            }
       //on retourne le tableau des fichiers
       return fichiers;
        }
    
    //lancer la recherche
    function vaChercher() {
        
        setProgress(0,"",3);
        
        //Vérifier que le dossier de recherche existe
        var dossier = new Folder(cheminDossier.text);
        if (!dossier.exists) { //si il existe pas
            choixDossier(); //lancer la fonction de choix de dossier
            dossier = new Folder(cheminDossier.text); //essayer encore
            if (!dossier.exists) return; //si c'est toujours pas bon, on laisse tomber
            }
        
        //regarder si il y a un projet ouvert pour le fermer. Uniquement si dans les options on veut chercher des trucs DANS le projet et pas juste sur le nom des projets (sinon inutile de les ouvrir)
        var projetOuvert;
        if (app.project.items.length > 0 && (caseItem.value || caseLayers.value || caseText.value) )
        {
            //le garder dans une variable pour le rouvrir à la fin, parcequ'on est sympas
            projetOuvert = app.project.file;
            //demander si on peut sauvegarder le projet, puis le sauver et fermer
            var ok = app.project.close(CloseOptions.PROMPT_TO_SAVE_CHANGES);
            if (!ok) return; //si l'utilisateur a annulé on arrète là
        }
        
        liste.removeAll(); //vider la liste d'une éventuelle ancienne recherche
        
		setProgress(1,"Listing AEP...");

        var lesAep = findAEP(dossier,caseDossier.value);
        
		setProgress(1,lesAep.length + " AEP available!",lesAep.length);
        
        //si on a demandé tous les fichiers, récupérer aussi les autres fichiers (uniquement si on cherche dans les noms de fichiers, sinon on s'en fiche) et faire la recherche sur leurs noms
		var lesFichiers = [];
        if (caseAllFiles.value && caseNomFile.value) {
            
			setProgress(2,"Listing Files...");
			
            lesFichiers = findFiles(dossier,caseDossier.value); //fonction récursive pour tous les fichiers
			
			setProgress(2,lesFichiers.length + " Files available!",lesAep.length+lesFichiers.length);

            //boucle dessus pour voir si yen a qui correspondent à la recherche
            for (i in lesFichiers) {
                
				setProgress(i);
				
                var trouve = find(recherche.text,lesFichiers[i].name); //chercher
                if (trouve) { //si on a trouvé
                    var listeItem = liste.add("item",noCodes(lesFichiers[i].name)); //ajouter un item dans la liste
                    listeItem.aep = lesFichiers[i]; //enregistrer le fichier dans l'item, pour pouvoir l'ouvrir/importer plus tard
                    }//end if (trouve)
                }
			setProgress(lesFichiers.length,liste.items.length + " Files found matching your search!");
            }
        
		delete lesFichiers;
		
        //boucle sur le tableau des aep
        setProgress(lesFichiers.length,"Checking AEP...");
        var ancienProgress = lesFichiers.length;
		
        for (i = 0;i<lesAep.length;i++)
        {
            setProgress(i+ancienProgress);
            //chercher dans le nom du fichier (si la case est cochée dans les options)
            if (caseNomFile.value) {
                var trouve = find(recherche.text,lesAep[i].name); //chercher
                if (trouve) { //si on a trouvé
                    var listeItem = liste.add("item",noCodes(lesAep[i].name)); //ajouter un item dans la liste
                    listeItem.aep = lesAep[i]; //enregistrer le fichier Aep dans l'item, pour pouvoir l'ouvrir/importer plus tard
                    }//end if (trouve) 
                }//end if (caseNomAep.value)
            
			if (boutonAepContent.value && boutonQuickMode.value)
			{
				lesAep[i].open("r");
				var aepString = lesAep[i].read();
				lesAep[i].close();
				var trouve = find(recherche.text,aepString); //chercher
				delete aepString;
				if (trouve) { //si on a trouvé
                    var listeItem = liste.add("item",noCodes(lesAep[i].name + " | Found some result(s) inside this project")); //ajouter un item dans la liste
                    listeItem.aep = lesAep[i]; //enregistrer le fichier Aep dans l'item, pour pouvoir l'ouvrir/importer plus tard
                    }//end if (trouve) 
			}
			else if (boutonAepContent.value && !boutonQuickMode.value)
			{
				//si on a coché une des cases qui nécessitent d'ouvrir le projet pour la recherche, on ouvre le projet
				if  (caseItem.value || caseLayers.value || caseText.value) app.open(lesAep[i]);
				else continue;
				
				var items = app.project.items; //tous les items du projet
				for (j = 1; j <= items.length ; j++) //on parcoure tous les items
				{
					
					var trouve = false; //préparer une variable pour savoir si on a trouvé
					
					//si on a coché la case pour chercher dans les noms des items, on le fait : 
					if (caseItem.value) trouve = find(recherche.text,items[j].name);
					//si on a trouvé :
					if (trouve) {
						var texteAffiche = ""; //préparer le texte à afficher dans la liste
						if (items[j] instanceof CompItem) texteAffiche = lesAep[i].name + " | " + "Composition: " + items[j].name; //si l'item trouvé est une compo, on prépare le texte à afficher
						else if (items[j] instanceof FootageItem) texteAffiche = lesAep[i].name + " | " + "Footage: " + items[j].name;  //si l'item trouvé est un métrage, on prépare le texte à afficher
						else if (items[j] instanceof FolderItem) texteAffiche = lesAep[i].name + " | " + "Folder: " + items[j].name; //si l'item trouvé est un dossier, on prépare le texte à afficher
						var listeItem = liste.add("item",noCodes(texteAffiche)); //ajouter un item dans la liste
						listeItem.aep = lesAep[i]; //enregistrer le fichier Aep dans l'item, pour pouvoir l'ouvrir/importer plus tard
						}
					
					// si item est compitem, cherche calques, si trouve, ajoute a listbox
					if (caseLayers.value && items[j] instanceof CompItem) {
						for (k = 1;k<=items[j].layers.length;k++) {
							trouve = find(recherche.text,items[j].layers[k].name);
							if (trouve) {
								var texteAffiche = lesAep[i].name + " | " + "Composition: " + items[j].name + " - Layer: " + items[j].layers[k].name;
								var listeItem = liste.add("item",noCodes(texteAffiche));
								listeItem.aep = lesAep[i];
							}
							//si on trouve un textlayer, chercher dans le sourcetext
							if (items[j].layers[k] instanceof TextLayer && caseText.value) {
							trouve = find(recherche.text,items[j].layers[k].text.sourceText.value);
							if (trouve) {
								var texteAffiche = lesAep[i].name + " | " + "Composition: " + items[j].name + " - Text Layer: " + items[j].layers[k].name;
								var listeItem = liste.add("item",noCodes(texteAffiche));
								listeItem.aep = lesAep[i];
							}
							}
						}
					}
					
					
					}
				
				}
			}
			delete lesAep;
        cheminAEP.text = liste.items.length + " results."; //afficher le total de résultats, c'est cool
        if (liste.items.length > 0) filtre.enabled = true; //si ya des résultats, on active le champ filtre
        else filtre.enabled = false; //sinon on le désactive
        //enfin, rouvrir le projet qui était ouvert au tout début
        if (projetOuvert != undefined) app.open(projetOuvert); //si il y en avait un ouvert, le rouvrir
        else app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES); //sinon juste fermer le dernier qui a été ouvert
        setProgress(0,"");
        }

    //recherche de chaine de caractères
    function find(chaineR,chaineS) {
        //mettre des espaces devant les + 
        chaineR = chaineR.split("+").join(" +");
        //mettre des espaces devant les -
        chaineR = chaineR.split("-").join(" -");
        
        var termes = chaineR.split(" "); //Séparer les termes de recherche
        
        var resultat = false;
        
        for (terme in termes) {
            if (termes[terme] == "") continue;
            var plus = false;
            var moins = false;
            //si il y a un plus au début, on l'enlève
            if (termes[terme].indexOf("+") == 0) { //se souvenir si il y avait un + au début
                plus = true;
                termes[terme] = termes[terme].substr(1); //enlever le + du début
                }
            //si il y a un moins au début, on l'enlève
            if (termes[terme].indexOf("-") == 0) { //se souvenir si il y avait un -
                moins = true;
                termes[terme] = termes[terme].substr(1); //enlever le -
                }
            var mots = termes[terme].split("*"); //on vire les jokers
            var indexMotAvant = 0;
            var trouve = true;
            for (mot in mots) { //et on cherche parmi tous les mots entre les jokers
                var indexMot = -1;
                if (!caseCasse.value) indexMot = chaineS.toString().toLowerCase().indexOf(mots[mot].toLowerCase());
                else indexMot = chaineS.toString().indexOf(mots[mot]);
                if (indexMot < 0) {trouve  = false; break;}
                if (indexMot < indexMotAvant) { trouve = false; break;}
                indexMotAvant = indexMot;
                }
            if (trouve && !moins) resultat = true; //si on a trouvé et qu'il n'y avait pas de moins au début
            else if (trouve && moins) return false; //si on a trouvé et qu'il y avait un moins au début on arrète tout de suite
            else  if (!trouve && plus) return false;//si ya un + au début, et qu'on n'a pas trouvé, on arrète tout de suite
            }
        return resultat;
        }
    
    //importe les éléments sélectionnés
    function importe() {
        for (i=0;i<liste.selection.length;i++) {
			app.project.importFile(new ImportOptions(File(liste.selection[i].aep)));
		}
    }
	
	//ouvre le projet sélectionné
	function ouvre() {
		app.open(liste.selection[0].aep);
	}

    //quand on change la sélection dans la liste (afficher le chemin en dessous, et activer les boutons importer/ouvrir
    function listeChange() {
        if (liste.selection != null) { //si il y a une sélection
            cheminAEP.text = liste.selection[liste.selection.length-1].aep.fsName; //afficher le chemin du projet (comme on est en multi select, celui du dernier élément a avoir été sélectionné
            boutonImporter.enabled = true; //activer le bouton importer
            if (liste.selection.length == 1) {//si il n'y en a qu'un sélectionné
                var ext = liste.selection[0].aep.name.substr(-4).toLowerCase(); //Récupérer les 4 derniers caractères du nom de fichier
				boutonOuvrirDossier.enabled = true;
                if (ext == ".aep" || ext == ".aet" || ext == "aepx") boutonOuvrir.enabled = true; //si c'sst un projet after, activer le bouton ouvrir
                else boutonOuvrir.enabled = false; // sinon le désactiver
                } else { //if (liste.selection.length == 1) : si il y en a plusieurs de sélectionnés
                boutonOuvrir.enabled = false; //sinon on désactive bouton ouvrir
				boutonOuvrirDossier.enabled = false;
                } //else if (liste.selection.length == 1)
				
            }
        else { //si il n'y a rien de sélectionné
            cheminAEP.text = ""; //virer le chemin affiché
            boutonOuvrirDossier.enabled = boutonImporter.enabled = boutonOuvrir.enabled = false; //désactiver les boutons importer et ouvrir
            }
        
        }
    //fonction pour remplacer les %20 et autres codes à la con d'une chaine de caractère
    function noCodes(chaine) {
        chaine = chaine.split("%20").join(" ");
        return chaine;
        }
    //fonction qui coche les cases correspondant au contenu des AEP (au clic sur le bouton correspondant dans les options)
    function checkAepContents() {
            caseText.value = caseLayers.value = caseItem.value = boutonAepContent.value;
            groupAepContent.enabled = boutonAepContent.value;
			//sauver dans les settings
			app.settings.saveSetting("Dusearch","searchInsideAEP",boutonAepContent.value);
			app.settings.saveSetting("Dusearch","searchItems",caseItem.value);
			app.settings.saveSetting("Dusearch","searchLayers",caseLayers.value);
			app.settings.saveSetting("Dusearch","searchTextLayers",caseText.value);
        }
			
	//fonction qui coche les trois cases de contenu quand on passe en quickmode
	function setQuickMode() {
		if (boutonQuickMode.value)
		{
			caseText.value = caseLayers.value = caseItem.value = true;
			caseText.enabled = caseLayers.enabled = caseItem.enabled = false;
		}
		else
		{
			caseText.enabled = caseLayers.enabled = caseItem.enabled = true;
		}
		
		//sauver dans les settings
		app.settings.saveSetting("Dusearch","quickMode",boutonAepContent.value);
		app.settings.saveSetting("Dusearch","searchItems",caseItem.value);
		app.settings.saveSetting("Dusearch","searchLayers",caseLayers.value);
		app.settings.saveSetting("Dusearch","searchTextLayers",caseText.value);
	}
    //fonction pour filtrer les résultats de la recherche
    function filtrer() {
        //voir si ya pas des items à remettre
        if (liste.filteredItems.length > 0)
        for (i = 0;i<liste.filteredItems.length;i++) {
            if (liste.filteredItems[i][0].toLowerCase().indexOf(filtre.text.toLowerCase()) >=0) {
                var newItem = liste.add("item",liste.filteredItems[i][0]);
                newItem.aep = liste.filteredItems[i][1];
                liste.filteredItems.splice(i,1);
                i--;
                }
            }
        //et enlever 
        for (i=0;i<liste.items.length;i++) {
            if (liste.items[i].text.toLowerCase().indexOf(filtre.text.toLowerCase()) < 0) {
                liste.filteredItems.push([liste.items[i].text,liste.items[i].aep]);
                liste.remove(i);
                i--;
                }
            }
        }
	
	//fonction pour afficher/mettre à jour la barre de progression
	function setProgress(val,text,maxval) {
		if (fenetre instanceof Window) {
			if (maxval != undefined) progress.maxvalue = maxval;
			if (text != undefined) cheminAEP.text = text;
			progress.value = val;
			fenetre.update();
		}
		else {
			if (maxval != undefined) progress2.maxvalue = maxval;
			if (val > 0) fenetreProgression.show();
			else fenetreProgression.hide();
			if (text != undefined) progressText.text = text;
			progress2.value = val;
			fenetreProgression.update();
		}
	}
	
	//fonction affiche le dossier d'un élément sélectionné
	function ouvreDossier() {
		var dir = liste.selection[0].aep.parent;
		dir.execute();
	}
	
	//fonction qui crée les boutons : avec icones si on les trouve
	function addButton(container,text,filename) {
	    var cheminIcones = imgFolder + "/";
		
		if (filename != undefined)
		{
			if (File(cheminIcones + filename).exists)
			{
				var bouton = container.add("iconbutton",undefined,cheminIcones + filename);
				bouton.text = text;
				return bouton;
			}
			else
			{
				return container.add("button",undefined,text);
			}
		}
		else
		{
			return container.add("button",undefined,text);
		}
	}
    //===============================================
    //================= UI============================
    //===============================================
	{
    var fenetre = obj instanceof Panel ? obj : new Window("window","DuSearch",undefined,{resizeable:true});
    var taille =  [600,400]; //Taille de la fenêtre en pixels quand ce n'est pas un Panel
    fenetre.alignChildren = ["fill", "fill"];
    fenetre.spacing  = 3;
    fenetre.margins = 3;
       
    //création de l'interface
	//BARRE DE  PROGRESSION
	var fenetreProgression = new Window("window","Progress",undefined,{borderless:true});
	fenetreProgression.alignChildren = ["fill", "fill"];
    fenetreProgression.spacing  = 3;
    fenetreProgression.margins = 3;
	fenetreProgression.size = [300,50];
	var progressText = fenetreProgression.add("statictext");
	var progress2 = fenetreProgression.add("progressbar");
    //FENETRE DES OPTIONS
    var fenetreOptions = new Window("window","Search options",undefined,{resizeable:true});
    fenetreOptions.alignChildren = ["fill", "fill"];
    fenetreOptions.spacing  = 3;
    fenetreOptions.margins = 3;
    fenetreOptions.add("statictext",undefined,"Search types:");
    var groupSearchTypes = fenetreOptions.add("group");
    groupSearchTypes.margins = [20,0,0,0];
    groupSearchTypes.orientation = "column";
    groupSearchTypes.spacing = 3;
    groupSearchTypes.alignChildren = ["left","center"];
    var caseAep = groupSearchTypes.add("radiobutton",undefined,"After Effects Projects");
    var caseAllFiles = groupSearchTypes.add("radiobutton",undefined,"All files");
    caseAep.value = eval(app.settings.getSetting("Dusearch","onlyAEP"));
	caseAep.onClick = function() { app.settings.saveSetting("Dusearch","onlyAEP",caseAep.value)};
	caseAllFiles.value = !eval(app.settings.getSetting("Dusearch","onlyAEP"));
	caseAllFiles.onClick = function() { app.settings.saveSetting("Dusearch","onlyAEP",caseAep.value)};
    fenetreOptions.add("statictext",undefined,"Search in:");
    var groupSearchIn = fenetreOptions.add("group");
    groupSearchIn.margins = [20,0,0,0];
    groupSearchIn.orientation = "column";
    groupSearchIn.spacing = 3;
    groupSearchIn.alignChildren = ["left","center"];
    var caseNomFile = groupSearchIn.add("checkbox",undefined,"File names");
    caseNomFile.value = eval(app.settings.getSetting("Dusearch","searchFileNames"));
	caseNomFile.onClick = function() { app.settings.saveSetting("Dusearch","searchFileNames",caseNomFile.value)};
    var boutonAepContent = groupSearchIn.add("checkbox",undefined,"Search inside AEP");
    boutonAepContent.onClick = checkAepContents;
    boutonAepContent.value = eval(app.settings.getSetting("Dusearch","searchInsideAEP"));
    var groupAepContent = groupSearchIn.add("group");
    groupAepContent.margins = [20,0,0,0];
    groupAepContent.orientation = "column";
    groupAepContent.spacing = 3;
    groupAepContent.alignChildren = ["left","center"];
	groupAepContent.enabled = boutonAepContent.value;
	var boutonQuickMode = groupAepContent.add("checkbox",undefined,"Quick Mode (no details)");
	boutonQuickMode.onClick = setQuickMode;
    boutonQuickMode.value = eval(app.settings.getSetting("Dusearch","quickMode"));
    var caseItem = groupAepContent.add("checkbox",undefined,"Items");
    caseItem.value = eval(app.settings.getSetting("Dusearch","searchItems"));
	caseItem.enabled = !boutonQuickMode.value;
	caseItem.onClick = function() { app.settings.saveSetting("Dusearch","searchItems",caseItem.value)};
    var caseLayers = groupAepContent.add("checkbox",undefined,"Layers");
    caseLayers.value = eval(app.settings.getSetting("Dusearch","searchLayers"));
	caseLayers.enabled = !boutonQuickMode.value;
	caseLayers.onClick = function() { app.settings.saveSetting("Dusearch","searchLayers",caseLayers.value)};
    var caseText = groupAepContent.add("checkbox",undefined,"Texts in text layers");
    caseText.value = eval(app.settings.getSetting("Dusearch","searchTextLayers"));
	caseText.onClick = function() { app.settings.saveSetting("Dusearch","searchTextLayers",caseText.value)};
	caseText.enabled = !boutonQuickMode.value;
    var boutonOptionsClose = fenetreOptions.add("button",undefined,"Close");
    boutonOptionsClose.onClick = function(){fenetreOptions.hide();}
    fenetreOptions.layout.layout(true);
    fenetreOptions.layout.resize();
    fenetreOptions.onResizing = fenetreOptions.onResize = function () {fenetreOptions.layout.resize()};
    
    //FENETRE PRINCIPALE
    //ENTETE
	var cheminIcones = imgFolder + "/";
    //groupes
    var groupeHaut = fenetre.add("group");
    groupeHaut.alignment = ["fill","top"];
    var groupeHautGauche = groupeHaut.add("group");
    groupeHautGauche.orientation = "column";
    groupeHautGauche.alignment = ["fill","fill"];
    groupeHautGauche.spacing = 1;
    var groupeHautMilieu = groupeHaut.add("group");
    groupeHautMilieu.orientation = "column";
    groupeHautMilieu.alignment = ["right","fill"];
    groupeHautGauche.spacing = 1;
    var groupeHautDroite = groupeHaut.add("group");
    groupeHautDroite.orientation = "column";
    groupeHautDroite.alignment = ["right","fill"];
    groupeHautGauche.spacing = 1;
    //boutons dans l'entete
    var groupeRecherche = groupeHautGauche.add("group");
    groupeRecherche.alignment = ["fill","center"];
    groupeRecherche.spacing = 3;
    var boutonOptions = addButton(groupeRecherche,"","options.png");
    boutonOptions.alignment = ["left","center"];
    boutonOptions.onClick = function () { fenetreOptions.show(); }
    boutonOptions.size = [25,25];
    boutonOptions.helpTip = "Search Options...";
    var recherche = groupeRecherche.add("edittext",undefined,"Search...   *=Wildcard    +=include   -=exclude");
    recherche.alignment = ["fill","center"];
    recherche.helpTip = " *   Wildcard\n +   the next word MUST be in the results\n -   the next word MUST NOT be in the results";
    var groupeDossier = groupeHautGauche.add("group");
    groupeDossier.alignment = ["fill","center"];
    groupeDossier.spacing = 3;
    var boutonDossier = addButton(groupeDossier,"","dossier.png");
    boutonDossier.alignment = ["left","center"];
    boutonDossier.onClick = choixDossier;
    boutonDossier.size = [25,25];
    boutonDossier.helpTip = "Select folder...";
    var cheminDossier = groupeDossier.add("edittext",undefined,"Search Folder");
    cheminDossier.alignment = ["fill","center"];
    cheminDossier.helpTip = "Select folder";
	cheminDossier.text = app.settings.getSetting("Dusearch","folder");
	cheminDossier.onActivate = function () { if (cheminDossier.text == "Search Folder") cheminDossier.text = "";  };
	cheminDossier.onChange = function () { if (Folder(cheminDossier.text).exists) app.settings.saveSetting("Dusearch","folder",cheminDossier.text); };
    var caseCasse = groupeHautMilieu.add("checkbox",undefined,"Case Sensitive");
    caseCasse.alignment = ["left","bottom"];
	caseCasse.value = eval(app.settings.getSetting("Dusearch","caseSensitive"));
	caseCasse.onClick = function () { app.settings.saveSetting("Dusearch","caseSensitive",caseCasse.value); };
    var caseDossier = groupeHautMilieu.add("checkbox",undefined,"Include Subfolders");
    caseDossier.value = eval(app.settings.getSetting("Dusearch","subFolders"));
    caseDossier.alignment = ["left","top"];
	caseDossier.onClick = function () { app.settings.saveSetting("Dusearch","subFolders",caseDossier.value); };
    var boutonRecherche = addButton(groupeHautDroite,"Search!","loupe.png");
    boutonRecherche.text = "Search!";
    boutonRecherche.alignment = ["fill","center"];
    boutonRecherche.onClick = vaChercher;
    //LISTE
    var liste = fenetre.add("listbox",undefined,"",{multiselect:true});
    liste.filteredItems = []; //on garde un tableau pour mettre les items qui ont été filtrés, et pouvoir les remettre quand on enlève le filtre
    var cheminAEP = fenetre.add("statictext");
    cheminAEP.alignment = ["fill","bottom"];
    liste.onDoubleClick = importe;
    liste.onChange = listeChange;
    var filtre = fenetre.add("edittext",undefined,"Filter results");
    filtre.onChanging = filtrer;
    filtre.enabled = false;
    //BAS
    var groupeBas = fenetre.add("group");
    groupeBas.alignment = ["fill","bottom"];
	var texteVersion = groupeBas.add("statictext",undefined,"v" + version);
	texteVersion.alignment = ["left","center"];
	texteVersion.enabled = false;
    var progress = groupeBas.add("progressbar");
    progress.alignment = ["fill","center"];
    if (fenetre instanceof Panel) progress.hide(); //la barre de progression ne sert à rien si le script est lancé depuis le menu fenetres (impossible de la mettre à jour, c'est naze)
	var boutonOuvrirDossier = addButton(groupeBas,"Show folder","dossier.png");
	boutonOuvrirDossier.alignment = ["right","center"];
    boutonOuvrirDossier.onClick = ouvreDossier;
    boutonOuvrirDossier.text = "Show folder";
    boutonOuvrirDossier.enabled = false;
    var boutonImporter = addButton(groupeBas,"Import","import.png");
    boutonImporter.alignment = ["right","center"];
    boutonImporter.onClick = importe;
    boutonImporter.text = "Import";
    boutonImporter.enabled = false;
    var boutonOuvrir = addButton(groupeBas,"Open project","open.png");
    boutonOuvrir.alignment = ["right","center"];
    boutonOuvrir.onClick = ouvre;
    boutonOuvrir.text = "Open project";
    boutonOuvrir.enabled = false;
    
    }
    
    //================= AFFICHAGE DE L'UI ============
    fenetre.layout.layout(true);
    fenetre.size = taille;
    fenetre.layout.resize();
    fenetre.onResizing = fenetre.onResize = function () {fenetre.layout.resize()};
    if (fenetre != null ) if (fenetre instanceof Window) fenetre.show();
    }

Dusearch(this);