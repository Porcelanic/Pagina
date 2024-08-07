PGDMP  %                    |         	   Eccomerce    16.2    16.2 ;    2           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            3           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            4           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            5           1262    16515 	   Eccomerce    DATABASE     �   CREATE DATABASE "Eccomerce" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE "Eccomerce";
                postgres    false            �            1259    16516    administrador    TABLE     �   CREATE TABLE public.administrador (
    email character varying(45) NOT NULL,
    nombre character varying(45) NOT NULL,
    password character varying(45) NOT NULL
);
 !   DROP TABLE public.administrador;
       public         heap    postgres    false            �            1259    16519    artista    TABLE     �   CREATE TABLE public.artista (
    email character varying(45) NOT NULL,
    nombre character varying(45) NOT NULL,
    password character varying(45) NOT NULL
);
    DROP TABLE public.artista;
       public         heap    postgres    false            �            1259    16522    camisa    TABLE     F  CREATE TABLE public.camisa (
    "idCamisa" integer NOT NULL,
    imagen character varying(50) NOT NULL,
    precio numeric(10,2) NOT NULL,
    talla character varying(20) NOT NULL,
    cantidad integer NOT NULL,
    "idEstampado" integer,
    "Material" character varying(20) NOT NULL,
    "numeroPedido" integer NOT NULL
);
    DROP TABLE public.camisa;
       public         heap    postgres    false            �            1259    16525    camisa_idCamisa_seq    SEQUENCE     �   CREATE SEQUENCE public."camisa_idCamisa_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."camisa_idCamisa_seq";
       public          postgres    false    217            6           0    0    camisa_idCamisa_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."camisa_idCamisa_seq" OWNED BY public.camisa."idCamisa";
          public          postgres    false    218            �            1259    24708 	   camisetas    TABLE       CREATE TABLE public.camisetas (
    "idCamiseta" integer NOT NULL,
    "diseño" text NOT NULL,
    nombre character varying(30) NOT NULL,
    tipo character varying(20) NOT NULL,
    precio integer NOT NULL,
    "adminEmail" character varying(45) NOT NULL
);
    DROP TABLE public.camisetas;
       public         heap    postgres    false            �            1259    24707    camisetas_idCamiseta_seq    SEQUENCE     �   CREATE SEQUENCE public."camisetas_idCamiseta_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."camisetas_idCamiseta_seq";
       public          postgres    false    228            7           0    0    camisetas_idCamiseta_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."camisetas_idCamiseta_seq" OWNED BY public.camisetas."idCamiseta";
          public          postgres    false    227            �            1259    16526    cliente    TABLE     �   CREATE TABLE public.cliente (
    email character varying(45) NOT NULL,
    nombre character varying(45) NOT NULL,
    password character varying(45) NOT NULL
);
    DROP TABLE public.cliente;
       public         heap    postgres    false            �            1259    16529 	   estampado    TABLE     �   CREATE TABLE public.estampado (
    "idEstampado" integer NOT NULL,
    "diseño" text NOT NULL,
    nombre character varying(20) NOT NULL,
    categoria character varying(20) NOT NULL,
    "artistaEmail" character varying(20) NOT NULL
);
    DROP TABLE public.estampado;
       public         heap    postgres    false            �            1259    16534    estampado_idEstampado_seq    SEQUENCE     �   CREATE SEQUENCE public."estampado_idEstampado_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."estampado_idEstampado_seq";
       public          postgres    false    220            8           0    0    estampado_idEstampado_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."estampado_idEstampado_seq" OWNED BY public.estampado."idEstampado";
          public          postgres    false    221            �            1259    16535    informacion_envio    TABLE     �  CREATE TABLE public.informacion_envio (
    id integer NOT NULL,
    barrio character varying(45) NOT NULL,
    ciudad character varying(45) NOT NULL,
    pais character varying(45) NOT NULL,
    "codigoPostal" character varying(10) NOT NULL,
    direccion character varying(45) NOT NULL,
    telefono character varying(13) NOT NULL,
    "clienteEmail" character varying(45) NOT NULL
);
 %   DROP TABLE public.informacion_envio;
       public         heap    postgres    false            �            1259    16538    informacion_envio_id_seq    SEQUENCE     �   CREATE SEQUENCE public.informacion_envio_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.informacion_envio_id_seq;
       public          postgres    false    222            9           0    0    informacion_envio_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.informacion_envio_id_seq OWNED BY public.informacion_envio.id;
          public          postgres    false    223            �            1259    16539    material    TABLE     o   CREATE TABLE public.material (
    "Material" character varying(20) NOT NULL,
    cantidad integer NOT NULL
);
    DROP TABLE public.material;
       public         heap    postgres    false            �            1259    16542    pedido    TABLE     0  CREATE TABLE public.pedido (
    "numeroPedido" integer NOT NULL,
    valor numeric(10,2) NOT NULL,
    estado character varying(15) NOT NULL,
    "fechaPedido" date NOT NULL,
    "fechaEnvio" date NOT NULL,
    "clienteEmail" character varying(45) NOT NULL,
    "informacionEnvioId" integer NOT NULL
);
    DROP TABLE public.pedido;
       public         heap    postgres    false            �            1259    16545    pedido_numeroPedido_seq    SEQUENCE     �   CREATE SEQUENCE public."pedido_numeroPedido_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."pedido_numeroPedido_seq";
       public          postgres    false    225            :           0    0    pedido_numeroPedido_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."pedido_numeroPedido_seq" OWNED BY public.pedido."numeroPedido";
          public          postgres    false    226            t           2604    16546    camisa idCamisa    DEFAULT     v   ALTER TABLE ONLY public.camisa ALTER COLUMN "idCamisa" SET DEFAULT nextval('public."camisa_idCamisa_seq"'::regclass);
 @   ALTER TABLE public.camisa ALTER COLUMN "idCamisa" DROP DEFAULT;
       public          postgres    false    218    217            x           2604    24711    camisetas idCamiseta    DEFAULT     �   ALTER TABLE ONLY public.camisetas ALTER COLUMN "idCamiseta" SET DEFAULT nextval('public."camisetas_idCamiseta_seq"'::regclass);
 E   ALTER TABLE public.camisetas ALTER COLUMN "idCamiseta" DROP DEFAULT;
       public          postgres    false    227    228    228            u           2604    16547    estampado idEstampado    DEFAULT     �   ALTER TABLE ONLY public.estampado ALTER COLUMN "idEstampado" SET DEFAULT nextval('public."estampado_idEstampado_seq"'::regclass);
 F   ALTER TABLE public.estampado ALTER COLUMN "idEstampado" DROP DEFAULT;
       public          postgres    false    221    220            v           2604    16548    informacion_envio id    DEFAULT     |   ALTER TABLE ONLY public.informacion_envio ALTER COLUMN id SET DEFAULT nextval('public.informacion_envio_id_seq'::regclass);
 C   ALTER TABLE public.informacion_envio ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222            w           2604    16549    pedido numeroPedido    DEFAULT     ~   ALTER TABLE ONLY public.pedido ALTER COLUMN "numeroPedido" SET DEFAULT nextval('public."pedido_numeroPedido_seq"'::regclass);
 D   ALTER TABLE public.pedido ALTER COLUMN "numeroPedido" DROP DEFAULT;
       public          postgres    false    226    225            "          0    16516    administrador 
   TABLE DATA           @   COPY public.administrador (email, nombre, password) FROM stdin;
    public          postgres    false    215   /K       #          0    16519    artista 
   TABLE DATA           :   COPY public.artista (email, nombre, password) FROM stdin;
    public          postgres    false    216   fK       $          0    16522    camisa 
   TABLE DATA           x   COPY public.camisa ("idCamisa", imagen, precio, talla, cantidad, "idEstampado", "Material", "numeroPedido") FROM stdin;
    public          postgres    false    217   �K       /          0    24708 	   camisetas 
   TABLE DATA           `   COPY public.camisetas ("idCamiseta", "diseño", nombre, tipo, precio, "adminEmail") FROM stdin;
    public          postgres    false    228   L       &          0    16526    cliente 
   TABLE DATA           :   COPY public.cliente (email, nombre, password) FROM stdin;
    public          postgres    false    219   �L       '          0    16529 	   estampado 
   TABLE DATA           `   COPY public.estampado ("idEstampado", "diseño", nombre, categoria, "artistaEmail") FROM stdin;
    public          postgres    false    220   "M       )          0    16535    informacion_envio 
   TABLE DATA           z   COPY public.informacion_envio (id, barrio, ciudad, pais, "codigoPostal", direccion, telefono, "clienteEmail") FROM stdin;
    public          postgres    false    222   �M       +          0    16539    material 
   TABLE DATA           8   COPY public.material ("Material", cantidad) FROM stdin;
    public          postgres    false    224   N       ,          0    16542    pedido 
   TABLE DATA           �   COPY public.pedido ("numeroPedido", valor, estado, "fechaPedido", "fechaEnvio", "clienteEmail", "informacionEnvioId") FROM stdin;
    public          postgres    false    225   bN       ;           0    0    camisa_idCamisa_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."camisa_idCamisa_seq"', 4, true);
          public          postgres    false    218            <           0    0    camisetas_idCamiseta_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."camisetas_idCamiseta_seq"', 14, true);
          public          postgres    false    227            =           0    0    estampado_idEstampado_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."estampado_idEstampado_seq"', 15, true);
          public          postgres    false    221            >           0    0    informacion_envio_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.informacion_envio_id_seq', 1, true);
          public          postgres    false    223            ?           0    0    pedido_numeroPedido_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."pedido_numeroPedido_seq"', 1, true);
          public          postgres    false    226            |           2606    16551 &   artista PK_0833afffbe25cb215d82b2f8112 
   CONSTRAINT     i   ALTER TABLE ONLY public.artista
    ADD CONSTRAINT "PK_0833afffbe25cb215d82b2f8112" PRIMARY KEY (email);
 R   ALTER TABLE ONLY public.artista DROP CONSTRAINT "PK_0833afffbe25cb215d82b2f8112";
       public            postgres    false    216            z           2606    16553 ,   administrador PK_264e359a8a02187f46707056db1 
   CONSTRAINT     o   ALTER TABLE ONLY public.administrador
    ADD CONSTRAINT "PK_264e359a8a02187f46707056db1" PRIMARY KEY (email);
 X   ALTER TABLE ONLY public.administrador DROP CONSTRAINT "PK_264e359a8a02187f46707056db1";
       public            postgres    false    215            ~           2606    16555 %   camisa PK_2f3d4ded10f52e2989c807df43a 
   CONSTRAINT     m   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT "PK_2f3d4ded10f52e2989c807df43a" PRIMARY KEY ("idCamisa");
 Q   ALTER TABLE ONLY public.camisa DROP CONSTRAINT "PK_2f3d4ded10f52e2989c807df43a";
       public            postgres    false    217            �           2606    16557 %   pedido PK_397fa7066ed1181aae03dd96f70 
   CONSTRAINT     q   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT "PK_397fa7066ed1181aae03dd96f70" PRIMARY KEY ("numeroPedido");
 Q   ALTER TABLE ONLY public.pedido DROP CONSTRAINT "PK_397fa7066ed1181aae03dd96f70";
       public            postgres    false    225            �           2606    24715 (   camisetas PK_4cb2a70073143ee3ab4465f37a8 
   CONSTRAINT     r   ALTER TABLE ONLY public.camisetas
    ADD CONSTRAINT "PK_4cb2a70073143ee3ab4465f37a8" PRIMARY KEY ("idCamiseta");
 T   ALTER TABLE ONLY public.camisetas DROP CONSTRAINT "PK_4cb2a70073143ee3ab4465f37a8";
       public            postgres    false    228            �           2606    16559 &   cliente PK_503f81286c5e49acd6a832abf43 
   CONSTRAINT     i   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT "PK_503f81286c5e49acd6a832abf43" PRIMARY KEY (email);
 R   ALTER TABLE ONLY public.cliente DROP CONSTRAINT "PK_503f81286c5e49acd6a832abf43";
       public            postgres    false    219            �           2606    16561 '   material PK_6d6f745617ff9f1466cbe3aced6 
   CONSTRAINT     o   ALTER TABLE ONLY public.material
    ADD CONSTRAINT "PK_6d6f745617ff9f1466cbe3aced6" PRIMARY KEY ("Material");
 S   ALTER TABLE ONLY public.material DROP CONSTRAINT "PK_6d6f745617ff9f1466cbe3aced6";
       public            postgres    false    224            �           2606    16563 (   estampado PK_b60ae069500a645ee8a8738df61 
   CONSTRAINT     s   ALTER TABLE ONLY public.estampado
    ADD CONSTRAINT "PK_b60ae069500a645ee8a8738df61" PRIMARY KEY ("idEstampado");
 T   ALTER TABLE ONLY public.estampado DROP CONSTRAINT "PK_b60ae069500a645ee8a8738df61";
       public            postgres    false    220            �           2606    16565 0   informacion_envio PK_cb4caab11febaf127d2059111d3 
   CONSTRAINT     p   ALTER TABLE ONLY public.informacion_envio
    ADD CONSTRAINT "PK_cb4caab11febaf127d2059111d3" PRIMARY KEY (id);
 \   ALTER TABLE ONLY public.informacion_envio DROP CONSTRAINT "PK_cb4caab11febaf127d2059111d3";
       public            postgres    false    222            �           2606    16566 %   camisa FK_244c8cda2d2166c6fe6feed1692    FK CONSTRAINT     �   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT "FK_244c8cda2d2166c6fe6feed1692" FOREIGN KEY ("Material") REFERENCES public.material("Material") ON DELETE CASCADE;
 Q   ALTER TABLE ONLY public.camisa DROP CONSTRAINT "FK_244c8cda2d2166c6fe6feed1692";
       public          postgres    false    217    224    4742            �           2606    16571 (   estampado FK_55805e9d0d85f8677228541de29    FK CONSTRAINT     �   ALTER TABLE ONLY public.estampado
    ADD CONSTRAINT "FK_55805e9d0d85f8677228541de29" FOREIGN KEY ("artistaEmail") REFERENCES public.artista(email) ON DELETE CASCADE;
 T   ALTER TABLE ONLY public.estampado DROP CONSTRAINT "FK_55805e9d0d85f8677228541de29";
       public          postgres    false    4732    220    216            �           2606    16576 %   pedido FK_6e0511d9caf61089795170af8e5    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT "FK_6e0511d9caf61089795170af8e5" FOREIGN KEY ("clienteEmail") REFERENCES public.cliente(email) ON DELETE CASCADE;
 Q   ALTER TABLE ONLY public.pedido DROP CONSTRAINT "FK_6e0511d9caf61089795170af8e5";
       public          postgres    false    219    225    4736            �           2606    16581 %   camisa FK_71384bffd7114921926be4442bd    FK CONSTRAINT     �   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT "FK_71384bffd7114921926be4442bd" FOREIGN KEY ("numeroPedido") REFERENCES public.pedido("numeroPedido") ON DELETE CASCADE;
 Q   ALTER TABLE ONLY public.camisa DROP CONSTRAINT "FK_71384bffd7114921926be4442bd";
       public          postgres    false    4744    225    217            �           2606    16586 %   pedido FK_a527dba3b30041dd8fb3e8fb13f    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT "FK_a527dba3b30041dd8fb3e8fb13f" FOREIGN KEY ("informacionEnvioId") REFERENCES public.informacion_envio(id);
 Q   ALTER TABLE ONLY public.pedido DROP CONSTRAINT "FK_a527dba3b30041dd8fb3e8fb13f";
       public          postgres    false    222    4740    225            �           2606    24716 (   camisetas FK_a81deff41ba1760b1bd2a8aac68    FK CONSTRAINT     �   ALTER TABLE ONLY public.camisetas
    ADD CONSTRAINT "FK_a81deff41ba1760b1bd2a8aac68" FOREIGN KEY ("adminEmail") REFERENCES public.administrador(email) ON DELETE CASCADE;
 T   ALTER TABLE ONLY public.camisetas DROP CONSTRAINT "FK_a81deff41ba1760b1bd2a8aac68";
       public          postgres    false    215    4730    228            �           2606    16591 %   camisa FK_e5076cadc47b9c264b2ae54e8a0    FK CONSTRAINT     �   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT "FK_e5076cadc47b9c264b2ae54e8a0" FOREIGN KEY ("idEstampado") REFERENCES public.estampado("idEstampado") ON DELETE CASCADE;
 Q   ALTER TABLE ONLY public.camisa DROP CONSTRAINT "FK_e5076cadc47b9c264b2ae54e8a0";
       public          postgres    false    4738    217    220            �           2606    16596 0   informacion_envio FK_ee88a59629a9b49280519b7f583    FK CONSTRAINT     �   ALTER TABLE ONLY public.informacion_envio
    ADD CONSTRAINT "FK_ee88a59629a9b49280519b7f583" FOREIGN KEY ("clienteEmail") REFERENCES public.cliente(email) ON DELETE CASCADE;
 \   ALTER TABLE ONLY public.informacion_envio DROP CONSTRAINT "FK_ee88a59629a9b49280519b7f583";
       public          postgres    false    4736    222    219            "   '   x��M�+M��,�wH�M���K�����qr��qqq ��
�      #   ?   x��M�+M��,�wH�M���K���tK-����4�J-.K,JO,.B�tM)O,�442����� �]!      $   W   x�3��wN��,N,�wI-�/*�,2-�
��9@@���ӇӐ3Ə3 ?'3��$��Ӑ��Fc4�>�F ��9��)�y@}1z\\\ J �      /   �   x���;�0E��YE6@�L~�C
�����D��8��G��ϫ��Y�:��} ���h?>��#(Q���L�ɱkq��MOb� ��ړ6ܴ��&�9���\�LoH����d��=�ų�H� �,&*��F�l�k�g�c����!�~��_���Tw�r��-S�fρڠ_����I�(� �{�
      &   '   x��M�+M��,�wH�M���K�����qr��qqq ��
�      '   �   x�}�A
�0 �s�
?`t��mo������R�H�%I}�E<Z�� �k��fzH9<C�=`sD�+׵f�Fu��E�8Q��hZ8�*�1Q�f���nD�:t�~�H/Τz����9m=�д���K������Z��F[      )   Z   x��1�  �����Yb+A�T���R��b��w�JN�`�GCT�zD��Y$[O��i��#�|A���R��O�"��jNg��.�      +   5   x����L-.I-ⴴ�r�I�O��㴴������4��I�K�4����� C6      ,   F   x�3�44�4 =΀Լ��Լ�TN##c]]CӔ371�45'�$�!=713G/9?�Ӑ+F��� |`%     