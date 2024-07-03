PGDMP  .                    |            Database    16.2    16.2 E    ;           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            <           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            =           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            >           1262    16399    Database    DATABASE     �   CREATE DATABASE "Database" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE "Database";
                postgres    false            �            1259    16510    administrador    TABLE     �   CREATE TABLE public.administrador (
    nombre character varying(20) NOT NULL,
    email character varying(30) NOT NULL,
    password character varying(45) NOT NULL
);
 !   DROP TABLE public.administrador;
       public         heap    postgres    false            �            1259    16400    artista    TABLE     �   CREATE TABLE public.artista (
    nombre character varying(20) NOT NULL,
    email character varying(30) NOT NULL,
    password character varying(45) NOT NULL,
    trial438 character(1)
);
    DROP TABLE public.artista;
       public         heap    postgres    false            �            1259    16403    camisa    TABLE     p  CREATE TABLE public.camisa (
    idcamisa integer NOT NULL,
    imagen text NOT NULL,
    precio real NOT NULL,
    talla character varying(10) NOT NULL,
    color character varying(20) NOT NULL,
    cantidad integer NOT NULL,
    estampado_idestampado integer,
    material_idmaterial integer NOT NULL,
    pedido_numerodepedido integer,
    trial438 character(1)
);
    DROP TABLE public.camisa;
       public         heap    postgres    false            �            1259    16408    camisa_idcamisa_seq    SEQUENCE     �   CREATE SEQUENCE public.camisa_idcamisa_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.camisa_idcamisa_seq;
       public          postgres    false    216            ?           0    0    camisa_idcamisa_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.camisa_idcamisa_seq OWNED BY public.camisa.idcamisa;
          public          postgres    false    217            �            1259    16409    cliente    TABLE     �   CREATE TABLE public.cliente (
    nombre character varying(45) NOT NULL,
    email character varying(45) NOT NULL,
    password character varying(45) NOT NULL,
    trial438 character(1)
);
    DROP TABLE public.cliente;
       public         heap    postgres    false            �            1259    16412 	   estampado    TABLE       CREATE TABLE public.estampado (
    idestampado integer NOT NULL,
    "diseño" text NOT NULL,
    nombre character varying(20) NOT NULL,
    categoria character varying(20) NOT NULL,
    artista_email character varying(30) NOT NULL,
    trial438 character(1)
);
    DROP TABLE public.estampado;
       public         heap    postgres    false            �            1259    16417    estampado_idestampado_seq    SEQUENCE     �   CREATE SEQUENCE public.estampado_idestampado_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.estampado_idestampado_seq;
       public          postgres    false    219            @           0    0    estampado_idestampado_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.estampado_idestampado_seq OWNED BY public.estampado.idestampado;
          public          postgres    false    220            �            1259    16418    informacion    TABLE     n  CREATE TABLE public.informacion (
    idinformacion integer NOT NULL,
    barrio character varying(45) NOT NULL,
    ciudad character varying(45) NOT NULL,
    pais character varying(45) NOT NULL,
    codigopostal character varying(10) NOT NULL,
    direccion character varying(45) NOT NULL,
    telefono character varying(13) NOT NULL,
    trial438 character(1)
);
    DROP TABLE public.informacion;
       public         heap    postgres    false            �            1259    16421    informacion_idinformacion_seq    SEQUENCE     �   CREATE SEQUENCE public.informacion_idinformacion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.informacion_idinformacion_seq;
       public          postgres    false    221            A           0    0    informacion_idinformacion_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.informacion_idinformacion_seq OWNED BY public.informacion.idinformacion;
          public          postgres    false    222            �            1259    16422    material    TABLE     �   CREATE TABLE public.material (
    idmaterial integer NOT NULL,
    nombre character varying(45) NOT NULL,
    cantidad integer NOT NULL,
    trial438 character(1)
);
    DROP TABLE public.material;
       public         heap    postgres    false            �            1259    16425    material_idmaterial_seq    SEQUENCE     �   CREATE SEQUENCE public.material_idmaterial_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.material_idmaterial_seq;
       public          postgres    false    223            B           0    0    material_idmaterial_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.material_idmaterial_seq OWNED BY public.material.idmaterial;
          public          postgres    false    224            �            1259    16426    pago    TABLE     �   CREATE TABLE public.pago (
    numerodepago integer NOT NULL,
    fechapago date NOT NULL,
    valor real NOT NULL,
    trial441 character(1)
);
    DROP TABLE public.pago;
       public         heap    postgres    false            �            1259    16429    pago_numerodepago_seq    SEQUENCE     �   CREATE SEQUENCE public.pago_numerodepago_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.pago_numerodepago_seq;
       public          postgres    false    225            C           0    0    pago_numerodepago_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.pago_numerodepago_seq OWNED BY public.pago.numerodepago;
          public          postgres    false    226            �            1259    16430    pedido    TABLE     O  CREATE TABLE public.pedido (
    numerodepedido integer NOT NULL,
    valor real NOT NULL,
    estado character varying(45),
    fechapedido date,
    fechaenvio date,
    pago_numerodepago integer NOT NULL,
    cliente_email character varying(45) NOT NULL,
    informacion_idinformacion integer NOT NULL,
    trial441 character(1)
);
    DROP TABLE public.pedido;
       public         heap    postgres    false            �            1259    16433    pedido_numerodepedido_seq    SEQUENCE     �   CREATE SEQUENCE public.pedido_numerodepedido_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.pedido_numerodepedido_seq;
       public          postgres    false    227            D           0    0    pedido_numerodepedido_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.pedido_numerodepedido_seq OWNED BY public.pedido.numerodepedido;
          public          postgres    false    228            u           2604    16434    camisa idcamisa    DEFAULT     r   ALTER TABLE ONLY public.camisa ALTER COLUMN idcamisa SET DEFAULT nextval('public.camisa_idcamisa_seq'::regclass);
 >   ALTER TABLE public.camisa ALTER COLUMN idcamisa DROP DEFAULT;
       public          postgres    false    217    216            v           2604    16435    estampado idestampado    DEFAULT     ~   ALTER TABLE ONLY public.estampado ALTER COLUMN idestampado SET DEFAULT nextval('public.estampado_idestampado_seq'::regclass);
 D   ALTER TABLE public.estampado ALTER COLUMN idestampado DROP DEFAULT;
       public          postgres    false    220    219            w           2604    16436    informacion idinformacion    DEFAULT     �   ALTER TABLE ONLY public.informacion ALTER COLUMN idinformacion SET DEFAULT nextval('public.informacion_idinformacion_seq'::regclass);
 H   ALTER TABLE public.informacion ALTER COLUMN idinformacion DROP DEFAULT;
       public          postgres    false    222    221            x           2604    16437    material idmaterial    DEFAULT     z   ALTER TABLE ONLY public.material ALTER COLUMN idmaterial SET DEFAULT nextval('public.material_idmaterial_seq'::regclass);
 B   ALTER TABLE public.material ALTER COLUMN idmaterial DROP DEFAULT;
       public          postgres    false    224    223            y           2604    16438    pago numerodepago    DEFAULT     v   ALTER TABLE ONLY public.pago ALTER COLUMN numerodepago SET DEFAULT nextval('public.pago_numerodepago_seq'::regclass);
 @   ALTER TABLE public.pago ALTER COLUMN numerodepago DROP DEFAULT;
       public          postgres    false    226    225            z           2604    16439    pedido numerodepedido    DEFAULT     ~   ALTER TABLE ONLY public.pedido ALTER COLUMN numerodepedido SET DEFAULT nextval('public.pedido_numerodepedido_seq'::regclass);
 D   ALTER TABLE public.pedido ALTER COLUMN numerodepedido DROP DEFAULT;
       public          postgres    false    228    227            8          0    16510    administrador 
   TABLE DATA           @   COPY public.administrador (nombre, email, password) FROM stdin;
    public          postgres    false    229   pR       *          0    16400    artista 
   TABLE DATA           D   COPY public.artista (nombre, email, password, trial438) FROM stdin;
    public          postgres    false    215   �R       +          0    16403    camisa 
   TABLE DATA           �   COPY public.camisa (idcamisa, imagen, precio, talla, color, cantidad, estampado_idestampado, material_idmaterial, pedido_numerodepedido, trial438) FROM stdin;
    public          postgres    false    216   S       -          0    16409    cliente 
   TABLE DATA           D   COPY public.cliente (nombre, email, password, trial438) FROM stdin;
    public          postgres    false    218   -S       .          0    16412 	   estampado 
   TABLE DATA           g   COPY public.estampado (idestampado, "diseño", nombre, categoria, artista_email, trial438) FROM stdin;
    public          postgres    false    219   �S       0          0    16418    informacion 
   TABLE DATA           w   COPY public.informacion (idinformacion, barrio, ciudad, pais, codigopostal, direccion, telefono, trial438) FROM stdin;
    public          postgres    false    221   �T       2          0    16422    material 
   TABLE DATA           J   COPY public.material (idmaterial, nombre, cantidad, trial438) FROM stdin;
    public          postgres    false    223   �T       4          0    16426    pago 
   TABLE DATA           H   COPY public.pago (numerodepago, fechapago, valor, trial441) FROM stdin;
    public          postgres    false    225   U       6          0    16430    pedido 
   TABLE DATA           �   COPY public.pedido (numerodepedido, valor, estado, fechapedido, fechaenvio, pago_numerodepago, cliente_email, informacion_idinformacion, trial441) FROM stdin;
    public          postgres    false    227   2U       E           0    0    camisa_idcamisa_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.camisa_idcamisa_seq', 18, true);
          public          postgres    false    217            F           0    0    estampado_idestampado_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.estampado_idestampado_seq', 8, true);
          public          postgres    false    220            G           0    0    informacion_idinformacion_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.informacion_idinformacion_seq', 10, true);
          public          postgres    false    222            H           0    0    material_idmaterial_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.material_idmaterial_seq', 1, false);
          public          postgres    false    224            I           0    0    pago_numerodepago_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.pago_numerodepago_seq', 11, true);
          public          postgres    false    226            J           0    0    pedido_numerodepedido_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.pedido_numerodepedido_seq', 11, true);
          public          postgres    false    228            �           2606    16514     administrador administrador_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.administrador
    ADD CONSTRAINT administrador_pkey PRIMARY KEY (email);
 J   ALTER TABLE ONLY public.administrador DROP CONSTRAINT administrador_pkey;
       public            postgres    false    229            |           2606    16441    artista pk_artista 
   CONSTRAINT     S   ALTER TABLE ONLY public.artista
    ADD CONSTRAINT pk_artista PRIMARY KEY (email);
 <   ALTER TABLE ONLY public.artista DROP CONSTRAINT pk_artista;
       public            postgres    false    215            �           2606    16443    camisa pk_camisa 
   CONSTRAINT     T   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT pk_camisa PRIMARY KEY (idcamisa);
 :   ALTER TABLE ONLY public.camisa DROP CONSTRAINT pk_camisa;
       public            postgres    false    216            �           2606    16445    cliente pk_cliente 
   CONSTRAINT     S   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT pk_cliente PRIMARY KEY (email);
 <   ALTER TABLE ONLY public.cliente DROP CONSTRAINT pk_cliente;
       public            postgres    false    218            �           2606    16447    estampado pk_estampado 
   CONSTRAINT     ]   ALTER TABLE ONLY public.estampado
    ADD CONSTRAINT pk_estampado PRIMARY KEY (idestampado);
 @   ALTER TABLE ONLY public.estampado DROP CONSTRAINT pk_estampado;
       public            postgres    false    219            �           2606    16449    informacion pk_informacion 
   CONSTRAINT     c   ALTER TABLE ONLY public.informacion
    ADD CONSTRAINT pk_informacion PRIMARY KEY (idinformacion);
 D   ALTER TABLE ONLY public.informacion DROP CONSTRAINT pk_informacion;
       public            postgres    false    221            �           2606    16451    material pk_material 
   CONSTRAINT     Z   ALTER TABLE ONLY public.material
    ADD CONSTRAINT pk_material PRIMARY KEY (idmaterial);
 >   ALTER TABLE ONLY public.material DROP CONSTRAINT pk_material;
       public            postgres    false    223            �           2606    16453    pago pk_pago 
   CONSTRAINT     T   ALTER TABLE ONLY public.pago
    ADD CONSTRAINT pk_pago PRIMARY KEY (numerodepago);
 6   ALTER TABLE ONLY public.pago DROP CONSTRAINT pk_pago;
       public            postgres    false    225            �           2606    16455    pedido pk_pedido 
   CONSTRAINT     Z   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT pk_pedido PRIMARY KEY (numerodepedido);
 :   ALTER TABLE ONLY public.pedido DROP CONSTRAINT pk_pedido;
       public            postgres    false    227            }           1259    16456    fk_camisa_estampado1_idx    INDEX     \   CREATE INDEX fk_camisa_estampado1_idx ON public.camisa USING btree (estampado_idestampado);
 ,   DROP INDEX public.fk_camisa_estampado1_idx;
       public            postgres    false    216            ~           1259    16457    fk_camisa_material1_idx    INDEX     Y   CREATE INDEX fk_camisa_material1_idx ON public.camisa USING btree (material_idmaterial);
 +   DROP INDEX public.fk_camisa_material1_idx;
       public            postgres    false    216                       1259    16458    fk_camisa_pedido1_idx    INDEX     Y   CREATE INDEX fk_camisa_pedido1_idx ON public.camisa USING btree (pedido_numerodepedido);
 )   DROP INDEX public.fk_camisa_pedido1_idx;
       public            postgres    false    216            �           1259    16459    fk_estampado_artista1_idx    INDEX     X   CREATE INDEX fk_estampado_artista1_idx ON public.estampado USING btree (artista_email);
 -   DROP INDEX public.fk_estampado_artista1_idx;
       public            postgres    false    219            �           1259    16460    fk_pedido_cliente1_idx    INDEX     R   CREATE INDEX fk_pedido_cliente1_idx ON public.pedido USING btree (cliente_email);
 *   DROP INDEX public.fk_pedido_cliente1_idx;
       public            postgres    false    227            �           1259    16461    fk_pedido_informacion1_idx    INDEX     b   CREATE INDEX fk_pedido_informacion1_idx ON public.pedido USING btree (informacion_idinformacion);
 .   DROP INDEX public.fk_pedido_informacion1_idx;
       public            postgres    false    227            �           1259    16462    fk_pedido_pago1_idx    INDEX     S   CREATE INDEX fk_pedido_pago1_idx ON public.pedido USING btree (pago_numerodepago);
 '   DROP INDEX public.fk_pedido_pago1_idx;
       public            postgres    false    227            �           2606    16463    camisa fk_camisa_estampado1    FK CONSTRAINT     �   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT fk_camisa_estampado1 FOREIGN KEY (estampado_idestampado) REFERENCES public.estampado(idestampado);
 E   ALTER TABLE ONLY public.camisa DROP CONSTRAINT fk_camisa_estampado1;
       public          postgres    false    4742    219    216            �           2606    16468    camisa fk_camisa_material1    FK CONSTRAINT     �   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT fk_camisa_material1 FOREIGN KEY (material_idmaterial) REFERENCES public.material(idmaterial);
 D   ALTER TABLE ONLY public.camisa DROP CONSTRAINT fk_camisa_material1;
       public          postgres    false    4746    223    216            �           2606    16473    camisa fk_camisa_pedido1    FK CONSTRAINT     �   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT fk_camisa_pedido1 FOREIGN KEY (pedido_numerodepedido) REFERENCES public.pedido(numerodepedido);
 B   ALTER TABLE ONLY public.camisa DROP CONSTRAINT fk_camisa_pedido1;
       public          postgres    false    4753    227    216            �           2606    16478    estampado fk_estampado_artista1    FK CONSTRAINT     �   ALTER TABLE ONLY public.estampado
    ADD CONSTRAINT fk_estampado_artista1 FOREIGN KEY (artista_email) REFERENCES public.artista(email);
 I   ALTER TABLE ONLY public.estampado DROP CONSTRAINT fk_estampado_artista1;
       public          postgres    false    4732    215    219            �           2606    16483    pedido fk_pedido_cliente1    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT fk_pedido_cliente1 FOREIGN KEY (cliente_email) REFERENCES public.cliente(email);
 C   ALTER TABLE ONLY public.pedido DROP CONSTRAINT fk_pedido_cliente1;
       public          postgres    false    4739    218    227            �           2606    16488    pedido fk_pedido_informacion1    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT fk_pedido_informacion1 FOREIGN KEY (informacion_idinformacion) REFERENCES public.informacion(idinformacion);
 G   ALTER TABLE ONLY public.pedido DROP CONSTRAINT fk_pedido_informacion1;
       public          postgres    false    227    4744    221            �           2606    16493    pedido fk_pedido_pago1    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT fk_pedido_pago1 FOREIGN KEY (pago_numerodepago) REFERENCES public.pago(numerodepago);
 @   ALTER TABLE ONLY public.pedido DROP CONSTRAINT fk_pedido_pago1;
       public          postgres    false    225    4748    227            8   *   x�sM)O,�L-.K,JO,.rH�M���K���4�=... �      *   V   x��M�+M���S鹉�9z������1~\.�e�)��@���F�& %�)�E��0 W�W�� ݉`�����D��1z\\\ ��36      +      x������ � �      -   �   x�}�a�0�?�~��R?k�h��2ݭ66'-��7�`�pp���;V�~Dfi��0�����9���ƞ�Cwɬ�KS��$�������ޡf��2�4��ߎo��u�ݸt�[�ʙ�X���;����<�B`�E��޳%�/E)���}�mC_�d=!aB^�`�?      .   �   x��λ� �����rh��L�������SH
4��W����''��.��p�<�f���Y3U,n"t���| �J�|�,���%�+$�l$��\�`!��"%F�͔:�kz��-���Q�FYIVfcL�*(����69���*�ּ����ςR�j܇�      0      x������ � �      2   B   x�3��I�K�41���2������4� q9�s2S�KR�8��@"&��9��)�y�&� ~� ��      4      x������ � �      6      x������ � �     