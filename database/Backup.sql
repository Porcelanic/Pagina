PGDMP  
                	    {            Camisas    16.0    16.0 m    p           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            q           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            r           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            s           1262    17030    Camisas    DATABASE        CREATE DATABASE "Camisas" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE "Camisas";
                postgres    false            �            1259    17031    administrador    TABLE     �   CREATE TABLE public.administrador (
    nombre character varying(20) NOT NULL,
    email character varying(45) NOT NULL,
    password character varying(45) NOT NULL,
    tienda_idtienda integer NOT NULL,
    trial272 character(1)
);
 !   DROP TABLE public.administrador;
       public         heap    postgres    false            �            1259    17037    artista    TABLE     �   CREATE TABLE public.artista (
    nombre character varying(20) NOT NULL,
    email character varying(30) NOT NULL,
    password character varying(45) NOT NULL,
    trial272 character(1)
);
    DROP TABLE public.artista;
       public         heap    postgres    false            �            1259    17043    camisa    TABLE     �  CREATE TABLE public.camisa (
    idcamisa integer NOT NULL,
    precio real NOT NULL,
    talla character varying(45) NOT NULL,
    color character varying(45) NOT NULL,
    cantidad integer NOT NULL,
    estampado_idestampado integer NOT NULL,
    carrito_idcarrito integer NOT NULL,
    tienda_idtienda integer NOT NULL,
    material_idmaterial integer NOT NULL,
    trial272 character(1)
);
    DROP TABLE public.camisa;
       public         heap    postgres    false            �            1259    17042    camisa_idcamisa_seq    SEQUENCE     �   CREATE SEQUENCE public.camisa_idcamisa_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.camisa_idcamisa_seq;
       public          postgres    false    218            t           0    0    camisa_idcamisa_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.camisa_idcamisa_seq OWNED BY public.camisa.idcamisa;
          public          postgres    false    217            �            1259    17054    carrito    TABLE     [   CREATE TABLE public.carrito (
    idcarrito integer NOT NULL,
    trial272 character(1)
);
    DROP TABLE public.carrito;
       public         heap    postgres    false            �            1259    17053    carrito_idcarrito_seq    SEQUENCE     �   CREATE SEQUENCE public.carrito_idcarrito_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.carrito_idcarrito_seq;
       public          postgres    false    220            u           0    0    carrito_idcarrito_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.carrito_idcarrito_seq OWNED BY public.carrito.idcarrito;
          public          postgres    false    219            �            1259    17061 	   categoria    TABLE     �   CREATE TABLE public.categoria (
    idcategoria integer NOT NULL,
    nombre character varying(45) NOT NULL,
    trial272 character(1)
);
    DROP TABLE public.categoria;
       public         heap    postgres    false            �            1259    17060    categoria_idcategoria_seq    SEQUENCE     �   CREATE SEQUENCE public.categoria_idcategoria_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.categoria_idcategoria_seq;
       public          postgres    false    222            v           0    0    categoria_idcategoria_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.categoria_idcategoria_seq OWNED BY public.categoria.idcategoria;
          public          postgres    false    221            �            1259    17067    cliente    TABLE     �   CREATE TABLE public.cliente (
    nombre character varying(45) NOT NULL,
    telefono bigint,
    email character varying(45) NOT NULL,
    password character varying(45) NOT NULL,
    direccion_iddireccion integer,
    trial272 character(1)
);
    DROP TABLE public.cliente;
       public         heap    postgres    false            �            1259    17074 	   direccion    TABLE        CREATE TABLE public.direccion (
    iddireccion integer NOT NULL,
    barrio character varying(45) NOT NULL,
    ciudad character varying(45) NOT NULL,
    pais character varying(45) NOT NULL,
    codigopostal bigint NOT NULL,
    trial272 character(1)
);
    DROP TABLE public.direccion;
       public         heap    postgres    false            �            1259    17073    direccion_iddireccion_seq    SEQUENCE     �   CREATE SEQUENCE public.direccion_iddireccion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.direccion_iddireccion_seq;
       public          postgres    false    225            w           0    0    direccion_iddireccion_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.direccion_iddireccion_seq OWNED BY public.direccion.iddireccion;
          public          postgres    false    224            �            1259    17081 	   estampado    TABLE     X  CREATE TABLE public.estampado (
    idestampado integer NOT NULL,
    "diseño" character varying(45) NOT NULL,
    descripcion text,
    rating numeric(10,0),
    catalogo_id integer NOT NULL,
    artista_id integer NOT NULL,
    tienda_idtienda integer NOT NULL,
    artista_email character varying(30) NOT NULL,
    trial272 character(1)
);
    DROP TABLE public.estampado;
       public         heap    postgres    false            �            1259    17092    estampado_categoria    TABLE     �   CREATE TABLE public.estampado_categoria (
    idestampado_categoria integer NOT NULL,
    estampado_id integer NOT NULL,
    categoria_id integer NOT NULL,
    trial272 character(1)
);
 '   DROP TABLE public.estampado_categoria;
       public         heap    postgres    false            �            1259    17091 -   estampado_categoria_idestampado_categoria_seq    SEQUENCE     �   CREATE SEQUENCE public.estampado_categoria_idestampado_categoria_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 D   DROP SEQUENCE public.estampado_categoria_idestampado_categoria_seq;
       public          postgres    false    229            x           0    0 -   estampado_categoria_idestampado_categoria_seq    SEQUENCE OWNED BY        ALTER SEQUENCE public.estampado_categoria_idestampado_categoria_seq OWNED BY public.estampado_categoria.idestampado_categoria;
          public          postgres    false    228            �            1259    17080    estampado_idestampado_seq    SEQUENCE     �   CREATE SEQUENCE public.estampado_idestampado_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.estampado_idestampado_seq;
       public          postgres    false    227            y           0    0    estampado_idestampado_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.estampado_idestampado_seq OWNED BY public.estampado.idestampado;
          public          postgres    false    226            �            1259    17101    material    TABLE     �   CREATE TABLE public.material (
    idmaterial integer NOT NULL,
    nombre character varying(45) NOT NULL,
    cantidad integer NOT NULL,
    trial275 character(1)
);
    DROP TABLE public.material;
       public         heap    postgres    false            �            1259    17100    material_idmaterial_seq    SEQUENCE     �   CREATE SEQUENCE public.material_idmaterial_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.material_idmaterial_seq;
       public          postgres    false    231            z           0    0    material_idmaterial_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.material_idmaterial_seq OWNED BY public.material.idmaterial;
          public          postgres    false    230            �            1259    17108    pago    TABLE     �   CREATE TABLE public.pago (
    numerodepago integer NOT NULL,
    fechapago date NOT NULL,
    valor real NOT NULL,
    trial275 character(1)
);
    DROP TABLE public.pago;
       public         heap    postgres    false            �            1259    17107    pago_numerodepago_seq    SEQUENCE     �   CREATE SEQUENCE public.pago_numerodepago_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.pago_numerodepago_seq;
       public          postgres    false    233            {           0    0    pago_numerodepago_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.pago_numerodepago_seq OWNED BY public.pago.numerodepago;
          public          postgres    false    232            �            1259    17115    pedido    TABLE     �  CREATE TABLE public.pedido (
    numerodepedido integer NOT NULL,
    valor real NOT NULL,
    estado character varying(45) NOT NULL,
    fechapedido date NOT NULL,
    fechaenvio date NOT NULL,
    cliente_idcliente integer NOT NULL,
    carrito_idcarrito integer NOT NULL,
    pago_numerodepago integer NOT NULL,
    cliente_email character varying(45) NOT NULL,
    trial275 character(1)
);
    DROP TABLE public.pedido;
       public         heap    postgres    false            �            1259    17114    pedido_numerodepedido_seq    SEQUENCE     �   CREATE SEQUENCE public.pedido_numerodepedido_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.pedido_numerodepedido_seq;
       public          postgres    false    235            |           0    0    pedido_numerodepedido_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.pedido_numerodepedido_seq OWNED BY public.pedido.numerodepedido;
          public          postgres    false    234            �            1259    17125    tienda    TABLE     �   CREATE TABLE public.tienda (
    idtienda integer NOT NULL,
    nombre character varying(45) NOT NULL,
    ventasmes integer,
    ventasanio bigint,
    catalogo_idcatalogo integer NOT NULL,
    trial275 character(1)
);
    DROP TABLE public.tienda;
       public         heap    postgres    false            �            1259    17124    tienda_idtienda_seq    SEQUENCE     �   CREATE SEQUENCE public.tienda_idtienda_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.tienda_idtienda_seq;
       public          postgres    false    237            }           0    0    tienda_idtienda_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.tienda_idtienda_seq OWNED BY public.tienda.idtienda;
          public          postgres    false    236            �           2604    17046    camisa idcamisa    DEFAULT     r   ALTER TABLE ONLY public.camisa ALTER COLUMN idcamisa SET DEFAULT nextval('public.camisa_idcamisa_seq'::regclass);
 >   ALTER TABLE public.camisa ALTER COLUMN idcamisa DROP DEFAULT;
       public          postgres    false    217    218    218            �           2604    17057    carrito idcarrito    DEFAULT     v   ALTER TABLE ONLY public.carrito ALTER COLUMN idcarrito SET DEFAULT nextval('public.carrito_idcarrito_seq'::regclass);
 @   ALTER TABLE public.carrito ALTER COLUMN idcarrito DROP DEFAULT;
       public          postgres    false    220    219    220            �           2604    17064    categoria idcategoria    DEFAULT     ~   ALTER TABLE ONLY public.categoria ALTER COLUMN idcategoria SET DEFAULT nextval('public.categoria_idcategoria_seq'::regclass);
 D   ALTER TABLE public.categoria ALTER COLUMN idcategoria DROP DEFAULT;
       public          postgres    false    222    221    222            �           2604    17077    direccion iddireccion    DEFAULT     ~   ALTER TABLE ONLY public.direccion ALTER COLUMN iddireccion SET DEFAULT nextval('public.direccion_iddireccion_seq'::regclass);
 D   ALTER TABLE public.direccion ALTER COLUMN iddireccion DROP DEFAULT;
       public          postgres    false    225    224    225            �           2604    17084    estampado idestampado    DEFAULT     ~   ALTER TABLE ONLY public.estampado ALTER COLUMN idestampado SET DEFAULT nextval('public.estampado_idestampado_seq'::regclass);
 D   ALTER TABLE public.estampado ALTER COLUMN idestampado DROP DEFAULT;
       public          postgres    false    226    227    227            �           2604    17095 )   estampado_categoria idestampado_categoria    DEFAULT     �   ALTER TABLE ONLY public.estampado_categoria ALTER COLUMN idestampado_categoria SET DEFAULT nextval('public.estampado_categoria_idestampado_categoria_seq'::regclass);
 X   ALTER TABLE public.estampado_categoria ALTER COLUMN idestampado_categoria DROP DEFAULT;
       public          postgres    false    229    228    229            �           2604    17104    material idmaterial    DEFAULT     z   ALTER TABLE ONLY public.material ALTER COLUMN idmaterial SET DEFAULT nextval('public.material_idmaterial_seq'::regclass);
 B   ALTER TABLE public.material ALTER COLUMN idmaterial DROP DEFAULT;
       public          postgres    false    231    230    231            �           2604    17111    pago numerodepago    DEFAULT     v   ALTER TABLE ONLY public.pago ALTER COLUMN numerodepago SET DEFAULT nextval('public.pago_numerodepago_seq'::regclass);
 @   ALTER TABLE public.pago ALTER COLUMN numerodepago DROP DEFAULT;
       public          postgres    false    232    233    233            �           2604    17118    pedido numerodepedido    DEFAULT     ~   ALTER TABLE ONLY public.pedido ALTER COLUMN numerodepedido SET DEFAULT nextval('public.pedido_numerodepedido_seq'::regclass);
 D   ALTER TABLE public.pedido ALTER COLUMN numerodepedido DROP DEFAULT;
       public          postgres    false    234    235    235            �           2604    17128    tienda idtienda    DEFAULT     r   ALTER TABLE ONLY public.tienda ALTER COLUMN idtienda SET DEFAULT nextval('public.tienda_idtienda_seq'::regclass);
 >   ALTER TABLE public.tienda ALTER COLUMN idtienda DROP DEFAULT;
       public          postgres    false    237    236    237            W          0    17031    administrador 
   TABLE DATA           [   COPY public.administrador (nombre, email, password, tienda_idtienda, trial272) FROM stdin;
    public          postgres    false    215   ��       X          0    17037    artista 
   TABLE DATA           D   COPY public.artista (nombre, email, password, trial272) FROM stdin;
    public          postgres    false    216   Ƅ       Z          0    17043    camisa 
   TABLE DATA           �   COPY public.camisa (idcamisa, precio, talla, color, cantidad, estampado_idestampado, carrito_idcarrito, tienda_idtienda, material_idmaterial, trial272) FROM stdin;
    public          postgres    false    218   �       \          0    17054    carrito 
   TABLE DATA           6   COPY public.carrito (idcarrito, trial272) FROM stdin;
    public          postgres    false    220    �       ^          0    17061 	   categoria 
   TABLE DATA           B   COPY public.categoria (idcategoria, nombre, trial272) FROM stdin;
    public          postgres    false    222   �       _          0    17067    cliente 
   TABLE DATA           e   COPY public.cliente (nombre, telefono, email, password, direccion_iddireccion, trial272) FROM stdin;
    public          postgres    false    223   :�       a          0    17074 	   direccion 
   TABLE DATA           ^   COPY public.direccion (iddireccion, barrio, ciudad, pais, codigopostal, trial272) FROM stdin;
    public          postgres    false    225   W�       c          0    17081 	   estampado 
   TABLE DATA           �   COPY public.estampado (idestampado, "diseño", descripcion, rating, catalogo_id, artista_id, tienda_idtienda, artista_email, trial272) FROM stdin;
    public          postgres    false    227   t�       e          0    17092    estampado_categoria 
   TABLE DATA           j   COPY public.estampado_categoria (idestampado_categoria, estampado_id, categoria_id, trial272) FROM stdin;
    public          postgres    false    229   ��       g          0    17101    material 
   TABLE DATA           J   COPY public.material (idmaterial, nombre, cantidad, trial275) FROM stdin;
    public          postgres    false    231   ��       i          0    17108    pago 
   TABLE DATA           H   COPY public.pago (numerodepago, fechapago, valor, trial275) FROM stdin;
    public          postgres    false    233   ˅       k          0    17115    pedido 
   TABLE DATA           �   COPY public.pedido (numerodepedido, valor, estado, fechapedido, fechaenvio, cliente_idcliente, carrito_idcarrito, pago_numerodepago, cliente_email, trial275) FROM stdin;
    public          postgres    false    235   �       m          0    17125    tienda 
   TABLE DATA           h   COPY public.tienda (idtienda, nombre, ventasmes, ventasanio, catalogo_idcatalogo, trial275) FROM stdin;
    public          postgres    false    237   �       ~           0    0    camisa_idcamisa_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.camisa_idcamisa_seq', 1, false);
          public          postgres    false    217                       0    0    carrito_idcarrito_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.carrito_idcarrito_seq', 1, false);
          public          postgres    false    219            �           0    0    categoria_idcategoria_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.categoria_idcategoria_seq', 1, false);
          public          postgres    false    221            �           0    0    direccion_iddireccion_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.direccion_iddireccion_seq', 1, false);
          public          postgres    false    224            �           0    0 -   estampado_categoria_idestampado_categoria_seq    SEQUENCE SET     \   SELECT pg_catalog.setval('public.estampado_categoria_idestampado_categoria_seq', 1, false);
          public          postgres    false    228            �           0    0    estampado_idestampado_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.estampado_idestampado_seq', 1, false);
          public          postgres    false    226            �           0    0    material_idmaterial_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.material_idmaterial_seq', 1, false);
          public          postgres    false    230            �           0    0    pago_numerodepago_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.pago_numerodepago_seq', 1, false);
          public          postgres    false    232            �           0    0    pedido_numerodepedido_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.pedido_numerodepedido_seq', 1, false);
          public          postgres    false    234            �           0    0    tienda_idtienda_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.tienda_idtienda_seq', 1, false);
          public          postgres    false    236            �           2606    17035    administrador pk_administrador 
   CONSTRAINT     _   ALTER TABLE ONLY public.administrador
    ADD CONSTRAINT pk_administrador PRIMARY KEY (email);
 H   ALTER TABLE ONLY public.administrador DROP CONSTRAINT pk_administrador;
       public            postgres    false    215            �           2606    17041    artista pk_artista 
   CONSTRAINT     S   ALTER TABLE ONLY public.artista
    ADD CONSTRAINT pk_artista PRIMARY KEY (email);
 <   ALTER TABLE ONLY public.artista DROP CONSTRAINT pk_artista;
       public            postgres    false    216            �           2606    17048    camisa pk_camisa 
   CONSTRAINT     T   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT pk_camisa PRIMARY KEY (idcamisa);
 :   ALTER TABLE ONLY public.camisa DROP CONSTRAINT pk_camisa;
       public            postgres    false    218            �           2606    17059    carrito pk_carrito 
   CONSTRAINT     W   ALTER TABLE ONLY public.carrito
    ADD CONSTRAINT pk_carrito PRIMARY KEY (idcarrito);
 <   ALTER TABLE ONLY public.carrito DROP CONSTRAINT pk_carrito;
       public            postgres    false    220            �           2606    17066    categoria pk_categoria 
   CONSTRAINT     ]   ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT pk_categoria PRIMARY KEY (idcategoria);
 @   ALTER TABLE ONLY public.categoria DROP CONSTRAINT pk_categoria;
       public            postgres    false    222            �           2606    17071    cliente pk_cliente 
   CONSTRAINT     S   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT pk_cliente PRIMARY KEY (email);
 <   ALTER TABLE ONLY public.cliente DROP CONSTRAINT pk_cliente;
       public            postgres    false    223            �           2606    17079    direccion pk_direccion 
   CONSTRAINT     ]   ALTER TABLE ONLY public.direccion
    ADD CONSTRAINT pk_direccion PRIMARY KEY (iddireccion);
 @   ALTER TABLE ONLY public.direccion DROP CONSTRAINT pk_direccion;
       public            postgres    false    225            �           2606    17088    estampado pk_estampado 
   CONSTRAINT     ]   ALTER TABLE ONLY public.estampado
    ADD CONSTRAINT pk_estampado PRIMARY KEY (idestampado);
 @   ALTER TABLE ONLY public.estampado DROP CONSTRAINT pk_estampado;
       public            postgres    false    227            �           2606    17097 *   estampado_categoria pk_estampado_categoria 
   CONSTRAINT     {   ALTER TABLE ONLY public.estampado_categoria
    ADD CONSTRAINT pk_estampado_categoria PRIMARY KEY (idestampado_categoria);
 T   ALTER TABLE ONLY public.estampado_categoria DROP CONSTRAINT pk_estampado_categoria;
       public            postgres    false    229            �           2606    17106    material pk_material 
   CONSTRAINT     Z   ALTER TABLE ONLY public.material
    ADD CONSTRAINT pk_material PRIMARY KEY (idmaterial);
 >   ALTER TABLE ONLY public.material DROP CONSTRAINT pk_material;
       public            postgres    false    231            �           2606    17113    pago pk_pago 
   CONSTRAINT     T   ALTER TABLE ONLY public.pago
    ADD CONSTRAINT pk_pago PRIMARY KEY (numerodepago);
 6   ALTER TABLE ONLY public.pago DROP CONSTRAINT pk_pago;
       public            postgres    false    233            �           2606    17120    pedido pk_pedido 
   CONSTRAINT     Z   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT pk_pedido PRIMARY KEY (numerodepedido);
 :   ALTER TABLE ONLY public.pedido DROP CONSTRAINT pk_pedido;
       public            postgres    false    235            �           2606    17130    tienda pk_tienda 
   CONSTRAINT     T   ALTER TABLE ONLY public.tienda
    ADD CONSTRAINT pk_tienda PRIMARY KEY (idtienda);
 :   ALTER TABLE ONLY public.tienda DROP CONSTRAINT pk_tienda;
       public            postgres    false    237            �           1259    17099     estampadocategoria_categoria_idx    INDEX     h   CREATE INDEX estampadocategoria_categoria_idx ON public.estampado_categoria USING btree (categoria_id);
 4   DROP INDEX public.estampadocategoria_categoria_idx;
       public            postgres    false    229            �           1259    17098     estampadocategoria_estampado_idx    INDEX     h   CREATE INDEX estampadocategoria_estampado_idx ON public.estampado_categoria USING btree (estampado_id);
 4   DROP INDEX public.estampadocategoria_estampado_idx;
       public            postgres    false    229            �           1259    17036    fk_administrador_tienda1_idx    INDEX     a   CREATE INDEX fk_administrador_tienda1_idx ON public.administrador USING btree (tienda_idtienda);
 0   DROP INDEX public.fk_administrador_tienda1_idx;
       public            postgres    false    215            �           1259    17050    fk_camisa_carrito1_idx    INDEX     V   CREATE INDEX fk_camisa_carrito1_idx ON public.camisa USING btree (carrito_idcarrito);
 *   DROP INDEX public.fk_camisa_carrito1_idx;
       public            postgres    false    218            �           1259    17049    fk_camisa_estampado1_idx    INDEX     \   CREATE INDEX fk_camisa_estampado1_idx ON public.camisa USING btree (estampado_idestampado);
 ,   DROP INDEX public.fk_camisa_estampado1_idx;
       public            postgres    false    218            �           1259    17052    fk_camisa_material1_idx    INDEX     Y   CREATE INDEX fk_camisa_material1_idx ON public.camisa USING btree (material_idmaterial);
 +   DROP INDEX public.fk_camisa_material1_idx;
       public            postgres    false    218            �           1259    17051    fk_camisa_tienda1_idx    INDEX     S   CREATE INDEX fk_camisa_tienda1_idx ON public.camisa USING btree (tienda_idtienda);
 )   DROP INDEX public.fk_camisa_tienda1_idx;
       public            postgres    false    218            �           1259    17072    fk_cliente_direccion1_idx    INDEX     ^   CREATE INDEX fk_cliente_direccion1_idx ON public.cliente USING btree (direccion_iddireccion);
 -   DROP INDEX public.fk_cliente_direccion1_idx;
       public            postgres    false    223            �           1259    17090    fk_estampado_artista1_idx    INDEX     X   CREATE INDEX fk_estampado_artista1_idx ON public.estampado USING btree (artista_email);
 -   DROP INDEX public.fk_estampado_artista1_idx;
       public            postgres    false    227            �           1259    17089    fk_estampado_tienda1_idx    INDEX     Y   CREATE INDEX fk_estampado_tienda1_idx ON public.estampado USING btree (tienda_idtienda);
 ,   DROP INDEX public.fk_estampado_tienda1_idx;
       public            postgres    false    227            �           1259    17121    fk_pedido_carrito1_idx    INDEX     V   CREATE INDEX fk_pedido_carrito1_idx ON public.pedido USING btree (carrito_idcarrito);
 *   DROP INDEX public.fk_pedido_carrito1_idx;
       public            postgres    false    235            �           1259    17123    fk_pedido_cliente1_idx    INDEX     R   CREATE INDEX fk_pedido_cliente1_idx ON public.pedido USING btree (cliente_email);
 *   DROP INDEX public.fk_pedido_cliente1_idx;
       public            postgres    false    235            �           1259    17122    fk_pedido_pago1_idx    INDEX     S   CREATE INDEX fk_pedido_pago1_idx ON public.pedido USING btree (pago_numerodepago);
 '   DROP INDEX public.fk_pedido_pago1_idx;
       public            postgres    false    235            �           2606    17171 0   estampado_categoria estampadocategoria_categoria    FK CONSTRAINT     �   ALTER TABLE ONLY public.estampado_categoria
    ADD CONSTRAINT estampadocategoria_categoria FOREIGN KEY (categoria_id) REFERENCES public.categoria(idcategoria);
 Z   ALTER TABLE ONLY public.estampado_categoria DROP CONSTRAINT estampadocategoria_categoria;
       public          postgres    false    4770    222    229            �           2606    17176 0   estampado_categoria estampadocategoria_estampado    FK CONSTRAINT     �   ALTER TABLE ONLY public.estampado_categoria
    ADD CONSTRAINT estampadocategoria_estampado FOREIGN KEY (estampado_id) REFERENCES public.estampado(idestampado);
 Z   ALTER TABLE ONLY public.estampado_categoria DROP CONSTRAINT estampadocategoria_estampado;
       public          postgres    false    4779    227    229            �           2606    17131 &   administrador fk_administrador_tienda1    FK CONSTRAINT     �   ALTER TABLE ONLY public.administrador
    ADD CONSTRAINT fk_administrador_tienda1 FOREIGN KEY (tienda_idtienda) REFERENCES public.tienda(idtienda);
 P   ALTER TABLE ONLY public.administrador DROP CONSTRAINT fk_administrador_tienda1;
       public          postgres    false    237    215    4794            �           2606    17136    camisa fk_camisa_carrito1    FK CONSTRAINT     �   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT fk_camisa_carrito1 FOREIGN KEY (carrito_idcarrito) REFERENCES public.carrito(idcarrito);
 C   ALTER TABLE ONLY public.camisa DROP CONSTRAINT fk_camisa_carrito1;
       public          postgres    false    4768    218    220            �           2606    17141    camisa fk_camisa_estampado1    FK CONSTRAINT     �   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT fk_camisa_estampado1 FOREIGN KEY (estampado_idestampado) REFERENCES public.estampado(idestampado);
 E   ALTER TABLE ONLY public.camisa DROP CONSTRAINT fk_camisa_estampado1;
       public          postgres    false    4779    218    227            �           2606    17146    camisa fk_camisa_material1    FK CONSTRAINT     �   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT fk_camisa_material1 FOREIGN KEY (material_idmaterial) REFERENCES public.material(idmaterial);
 D   ALTER TABLE ONLY public.camisa DROP CONSTRAINT fk_camisa_material1;
       public          postgres    false    4785    218    231            �           2606    17151    camisa fk_camisa_tienda1    FK CONSTRAINT     �   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT fk_camisa_tienda1 FOREIGN KEY (tienda_idtienda) REFERENCES public.tienda(idtienda);
 B   ALTER TABLE ONLY public.camisa DROP CONSTRAINT fk_camisa_tienda1;
       public          postgres    false    237    4794    218            �           2606    17156    cliente fk_cliente_direccion1    FK CONSTRAINT     �   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT fk_cliente_direccion1 FOREIGN KEY (direccion_iddireccion) REFERENCES public.direccion(iddireccion);
 G   ALTER TABLE ONLY public.cliente DROP CONSTRAINT fk_cliente_direccion1;
       public          postgres    false    225    223    4775            �           2606    17161    estampado fk_estampado_artista1    FK CONSTRAINT     �   ALTER TABLE ONLY public.estampado
    ADD CONSTRAINT fk_estampado_artista1 FOREIGN KEY (artista_email) REFERENCES public.artista(email);
 I   ALTER TABLE ONLY public.estampado DROP CONSTRAINT fk_estampado_artista1;
       public          postgres    false    216    227    4760            �           2606    17166    estampado fk_estampado_tienda1    FK CONSTRAINT     �   ALTER TABLE ONLY public.estampado
    ADD CONSTRAINT fk_estampado_tienda1 FOREIGN KEY (tienda_idtienda) REFERENCES public.tienda(idtienda);
 H   ALTER TABLE ONLY public.estampado DROP CONSTRAINT fk_estampado_tienda1;
       public          postgres    false    237    4794    227            �           2606    17181    pedido fk_pedido_carrito1    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT fk_pedido_carrito1 FOREIGN KEY (carrito_idcarrito) REFERENCES public.carrito(idcarrito);
 C   ALTER TABLE ONLY public.pedido DROP CONSTRAINT fk_pedido_carrito1;
       public          postgres    false    235    4768    220            �           2606    17186    pedido fk_pedido_cliente1    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT fk_pedido_cliente1 FOREIGN KEY (cliente_email) REFERENCES public.cliente(email);
 C   ALTER TABLE ONLY public.pedido DROP CONSTRAINT fk_pedido_cliente1;
       public          postgres    false    223    4773    235            �           2606    17191    pedido fk_pedido_pago1    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT fk_pedido_pago1 FOREIGN KEY (pago_numerodepago) REFERENCES public.pago(numerodepago);
 @   ALTER TABLE ONLY public.pedido DROP CONSTRAINT fk_pedido_pago1;
       public          postgres    false    235    233    4787            W      x������ � �      X      x������ � �      Z      x������ � �      \      x������ � �      ^      x������ � �      _      x������ � �      a      x������ � �      c      x������ � �      e      x������ � �      g      x������ � �      i      x������ � �      k      x������ � �      m      x������ � �     