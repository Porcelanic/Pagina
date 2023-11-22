PGDMP                  
    {         
   camisasFIS    16.0    16.0 b    +           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ,           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            -           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            .           1262    16738 
   camisasFIS    DATABASE     �   CREATE DATABASE "camisasFIS" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE "camisasFIS";
                postgres    false            �            1259    16739    administrador    TABLE     �   CREATE TABLE public.administrador (
    nombre character varying(20) NOT NULL,
    email character varying(45) NOT NULL,
    password character varying(45) NOT NULL,
    tienda_idtienda integer NOT NULL,
    trial625 character(1)
);
 !   DROP TABLE public.administrador;
       public         heap    postgres    false            �            1259    16742    artista    TABLE     �   CREATE TABLE public.artista (
    nombre character varying(20) NOT NULL,
    email character varying(30) NOT NULL,
    password character varying(45) NOT NULL,
    trial625 character(1)
);
    DROP TABLE public.artista;
       public         heap    postgres    false            �            1259    16745    camisa    TABLE     b  CREATE TABLE public.camisa (
    idcamisa integer NOT NULL,
    imagen bytea NOT NULL,
    precio real NOT NULL,
    talla character varying(45) NOT NULL,
    color character varying(45) NOT NULL,
    cantidad integer NOT NULL,
    estampado_idestampado integer NOT NULL,
    tienda_idtienda integer NOT NULL,
    material_idmaterial integer NOT NULL
);
    DROP TABLE public.camisa;
       public         heap    postgres    false            �            1259    16750    camisa_idcamisa_seq    SEQUENCE     �   CREATE SEQUENCE public.camisa_idcamisa_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.camisa_idcamisa_seq;
       public          postgres    false    217            /           0    0    camisa_idcamisa_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.camisa_idcamisa_seq OWNED BY public.camisa.idcamisa;
          public          postgres    false    218            �            1259    16755 	   categoria    TABLE     �   CREATE TABLE public.categoria (
    idcategoria integer NOT NULL,
    nombre character varying(45) NOT NULL,
    trial625 character(1)
);
    DROP TABLE public.categoria;
       public         heap    postgres    false            �            1259    16758    categoria_idcategoria_seq    SEQUENCE     �   CREATE SEQUENCE public.categoria_idcategoria_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.categoria_idcategoria_seq;
       public          postgres    false    219            0           0    0    categoria_idcategoria_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.categoria_idcategoria_seq OWNED BY public.categoria.idcategoria;
          public          postgres    false    220            �            1259    16759    cliente    TABLE     �   CREATE TABLE public.cliente (
    nombre character varying(45) NOT NULL,
    telefono bigint,
    email character varying(45) NOT NULL,
    password character varying(45) NOT NULL,
    direccion_iddireccion integer
);
    DROP TABLE public.cliente;
       public         heap    postgres    false            �            1259    16762 	   direccion    TABLE       CREATE TABLE public.direccion (
    iddireccion integer NOT NULL,
    barrio character varying(45) NOT NULL,
    ciudad character varying(45) NOT NULL,
    pais character varying(45) NOT NULL,
    codigopostal bigint NOT NULL,
    direccion character varying(45) NOT NULL
);
    DROP TABLE public.direccion;
       public         heap    postgres    false            �            1259    16765    direccion_iddireccion_seq    SEQUENCE     �   CREATE SEQUENCE public.direccion_iddireccion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.direccion_iddireccion_seq;
       public          postgres    false    222            1           0    0    direccion_iddireccion_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.direccion_iddireccion_seq OWNED BY public.direccion.iddireccion;
          public          postgres    false    223            �            1259    16766 	   estampado    TABLE     H  CREATE TABLE public.estampado (
    idestampado integer NOT NULL,
    "diseño" bytea NOT NULL,
    descripcion text,
    rating numeric(10,0),
    catalogo_id integer NOT NULL,
    artista_id integer NOT NULL,
    tienda_idtienda integer NOT NULL,
    artista_email character varying(30) NOT NULL,
    trial629 character(1)
);
    DROP TABLE public.estampado;
       public         heap    postgres    false            �            1259    16771    estampado_categoria    TABLE     �   CREATE TABLE public.estampado_categoria (
    idestampado_categoria integer NOT NULL,
    estampado_id integer NOT NULL,
    categoria_id integer NOT NULL,
    trial629 character(1)
);
 '   DROP TABLE public.estampado_categoria;
       public         heap    postgres    false            �            1259    16774 -   estampado_categoria_idestampado_categoria_seq    SEQUENCE     �   CREATE SEQUENCE public.estampado_categoria_idestampado_categoria_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 D   DROP SEQUENCE public.estampado_categoria_idestampado_categoria_seq;
       public          postgres    false    225            2           0    0 -   estampado_categoria_idestampado_categoria_seq    SEQUENCE OWNED BY        ALTER SEQUENCE public.estampado_categoria_idestampado_categoria_seq OWNED BY public.estampado_categoria.idestampado_categoria;
          public          postgres    false    226            �            1259    16775    estampado_idestampado_seq    SEQUENCE     �   CREATE SEQUENCE public.estampado_idestampado_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.estampado_idestampado_seq;
       public          postgres    false    224            3           0    0    estampado_idestampado_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.estampado_idestampado_seq OWNED BY public.estampado.idestampado;
          public          postgres    false    227            �            1259    16776    material    TABLE     �   CREATE TABLE public.material (
    idmaterial integer NOT NULL,
    nombre character varying(45) NOT NULL,
    cantidad integer NOT NULL,
    trial629 character(1)
);
    DROP TABLE public.material;
       public         heap    postgres    false            �            1259    16779    material_idmaterial_seq    SEQUENCE     �   CREATE SEQUENCE public.material_idmaterial_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.material_idmaterial_seq;
       public          postgres    false    228            4           0    0    material_idmaterial_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.material_idmaterial_seq OWNED BY public.material.idmaterial;
          public          postgres    false    229            �            1259    16780    pago    TABLE     �   CREATE TABLE public.pago (
    numerodepago integer NOT NULL,
    fechapago date NOT NULL,
    valor real NOT NULL,
    trial629 character(1)
);
    DROP TABLE public.pago;
       public         heap    postgres    false            �            1259    16783    pago_numerodepago_seq    SEQUENCE     �   CREATE SEQUENCE public.pago_numerodepago_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.pago_numerodepago_seq;
       public          postgres    false    230            5           0    0    pago_numerodepago_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.pago_numerodepago_seq OWNED BY public.pago.numerodepago;
          public          postgres    false    231            �            1259    16784    pedido    TABLE       CREATE TABLE public.pedido (
    numerodepedido integer NOT NULL,
    valor real NOT NULL,
    estado character varying(45) NOT NULL,
    fechapedido date NOT NULL,
    fechaenvio date NOT NULL,
    pago_numerodepago integer NOT NULL,
    cliente_email character varying(45) NOT NULL
);
    DROP TABLE public.pedido;
       public         heap    postgres    false            �            1259    16787    pedido_numerodepedido_seq    SEQUENCE     �   CREATE SEQUENCE public.pedido_numerodepedido_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.pedido_numerodepedido_seq;
       public          postgres    false    232            6           0    0    pedido_numerodepedido_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.pedido_numerodepedido_seq OWNED BY public.pedido.numerodepedido;
          public          postgres    false    233            �            1259    16788    tienda    TABLE     �   CREATE TABLE public.tienda (
    idtienda integer NOT NULL,
    nombre character varying(45) NOT NULL,
    ventasmes integer,
    ventasanio bigint,
    catalogo_idcatalogo integer NOT NULL,
    trial629 character(1)
);
    DROP TABLE public.tienda;
       public         heap    postgres    false            �            1259    16791    tienda_idtienda_seq    SEQUENCE     �   CREATE SEQUENCE public.tienda_idtienda_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.tienda_idtienda_seq;
       public          postgres    false    234            7           0    0    tienda_idtienda_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.tienda_idtienda_seq OWNED BY public.tienda.idtienda;
          public          postgres    false    235            N           2604    16792    camisa idcamisa    DEFAULT     r   ALTER TABLE ONLY public.camisa ALTER COLUMN idcamisa SET DEFAULT nextval('public.camisa_idcamisa_seq'::regclass);
 >   ALTER TABLE public.camisa ALTER COLUMN idcamisa DROP DEFAULT;
       public          postgres    false    218    217            O           2604    16794    categoria idcategoria    DEFAULT     ~   ALTER TABLE ONLY public.categoria ALTER COLUMN idcategoria SET DEFAULT nextval('public.categoria_idcategoria_seq'::regclass);
 D   ALTER TABLE public.categoria ALTER COLUMN idcategoria DROP DEFAULT;
       public          postgres    false    220    219            P           2604    16795    direccion iddireccion    DEFAULT     ~   ALTER TABLE ONLY public.direccion ALTER COLUMN iddireccion SET DEFAULT nextval('public.direccion_iddireccion_seq'::regclass);
 D   ALTER TABLE public.direccion ALTER COLUMN iddireccion DROP DEFAULT;
       public          postgres    false    223    222            Q           2604    16796    estampado idestampado    DEFAULT     ~   ALTER TABLE ONLY public.estampado ALTER COLUMN idestampado SET DEFAULT nextval('public.estampado_idestampado_seq'::regclass);
 D   ALTER TABLE public.estampado ALTER COLUMN idestampado DROP DEFAULT;
       public          postgres    false    227    224            R           2604    16797 )   estampado_categoria idestampado_categoria    DEFAULT     �   ALTER TABLE ONLY public.estampado_categoria ALTER COLUMN idestampado_categoria SET DEFAULT nextval('public.estampado_categoria_idestampado_categoria_seq'::regclass);
 X   ALTER TABLE public.estampado_categoria ALTER COLUMN idestampado_categoria DROP DEFAULT;
       public          postgres    false    226    225            S           2604    16798    material idmaterial    DEFAULT     z   ALTER TABLE ONLY public.material ALTER COLUMN idmaterial SET DEFAULT nextval('public.material_idmaterial_seq'::regclass);
 B   ALTER TABLE public.material ALTER COLUMN idmaterial DROP DEFAULT;
       public          postgres    false    229    228            T           2604    16799    pago numerodepago    DEFAULT     v   ALTER TABLE ONLY public.pago ALTER COLUMN numerodepago SET DEFAULT nextval('public.pago_numerodepago_seq'::regclass);
 @   ALTER TABLE public.pago ALTER COLUMN numerodepago DROP DEFAULT;
       public          postgres    false    231    230            U           2604    16800    pedido numerodepedido    DEFAULT     ~   ALTER TABLE ONLY public.pedido ALTER COLUMN numerodepedido SET DEFAULT nextval('public.pedido_numerodepedido_seq'::regclass);
 D   ALTER TABLE public.pedido ALTER COLUMN numerodepedido DROP DEFAULT;
       public          postgres    false    233    232            V           2604    16801    tienda idtienda    DEFAULT     r   ALTER TABLE ONLY public.tienda ALTER COLUMN idtienda SET DEFAULT nextval('public.tienda_idtienda_seq'::regclass);
 >   ALTER TABLE public.tienda ALTER COLUMN idtienda DROP DEFAULT;
       public          postgres    false    235    234                      0    16739    administrador 
   TABLE DATA           [   COPY public.administrador (nombre, email, password, tienda_idtienda, trial625) FROM stdin;
    public          postgres    false    215   �v                 0    16742    artista 
   TABLE DATA           D   COPY public.artista (nombre, email, password, trial625) FROM stdin;
    public          postgres    false    216   �v                 0    16745    camisa 
   TABLE DATA           �   COPY public.camisa (idcamisa, imagen, precio, talla, color, cantidad, estampado_idestampado, tienda_idtienda, material_idmaterial) FROM stdin;
    public          postgres    false    217   6w                 0    16755 	   categoria 
   TABLE DATA           B   COPY public.categoria (idcategoria, nombre, trial625) FROM stdin;
    public          postgres    false    219   Sw                 0    16759    cliente 
   TABLE DATA           [   COPY public.cliente (nombre, telefono, email, password, direccion_iddireccion) FROM stdin;
    public          postgres    false    221   pw                 0    16762 	   direccion 
   TABLE DATA           _   COPY public.direccion (iddireccion, barrio, ciudad, pais, codigopostal, direccion) FROM stdin;
    public          postgres    false    222   �w                 0    16766 	   estampado 
   TABLE DATA           �   COPY public.estampado (idestampado, "diseño", descripcion, rating, catalogo_id, artista_id, tienda_idtienda, artista_email, trial629) FROM stdin;
    public          postgres    false    224   x                 0    16771    estampado_categoria 
   TABLE DATA           j   COPY public.estampado_categoria (idestampado_categoria, estampado_id, categoria_id, trial629) FROM stdin;
    public          postgres    false    225   3x       !          0    16776    material 
   TABLE DATA           J   COPY public.material (idmaterial, nombre, cantidad, trial629) FROM stdin;
    public          postgres    false    228   Px       #          0    16780    pago 
   TABLE DATA           H   COPY public.pago (numerodepago, fechapago, valor, trial629) FROM stdin;
    public          postgres    false    230   mx       %          0    16784    pedido 
   TABLE DATA           z   COPY public.pedido (numerodepedido, valor, estado, fechapedido, fechaenvio, pago_numerodepago, cliente_email) FROM stdin;
    public          postgres    false    232   �x       '          0    16788    tienda 
   TABLE DATA           h   COPY public.tienda (idtienda, nombre, ventasmes, ventasanio, catalogo_idcatalogo, trial629) FROM stdin;
    public          postgres    false    234   y       8           0    0    camisa_idcamisa_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.camisa_idcamisa_seq', 1, false);
          public          postgres    false    218            9           0    0    categoria_idcategoria_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.categoria_idcategoria_seq', 1, false);
          public          postgres    false    220            :           0    0    direccion_iddireccion_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.direccion_iddireccion_seq', 8, true);
          public          postgres    false    223            ;           0    0 -   estampado_categoria_idestampado_categoria_seq    SEQUENCE SET     \   SELECT pg_catalog.setval('public.estampado_categoria_idestampado_categoria_seq', 1, false);
          public          postgres    false    226            <           0    0    estampado_idestampado_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.estampado_idestampado_seq', 1, false);
          public          postgres    false    227            =           0    0    material_idmaterial_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.material_idmaterial_seq', 1, false);
          public          postgres    false    229            >           0    0    pago_numerodepago_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.pago_numerodepago_seq', 6, true);
          public          postgres    false    231            ?           0    0    pedido_numerodepedido_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.pedido_numerodepedido_seq', 4, true);
          public          postgres    false    233            @           0    0    tienda_idtienda_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.tienda_idtienda_seq', 1, false);
          public          postgres    false    235            Y           2606    16803    administrador pk_administrador 
   CONSTRAINT     _   ALTER TABLE ONLY public.administrador
    ADD CONSTRAINT pk_administrador PRIMARY KEY (email);
 H   ALTER TABLE ONLY public.administrador DROP CONSTRAINT pk_administrador;
       public            postgres    false    215            [           2606    16805    artista pk_artista 
   CONSTRAINT     S   ALTER TABLE ONLY public.artista
    ADD CONSTRAINT pk_artista PRIMARY KEY (email);
 <   ALTER TABLE ONLY public.artista DROP CONSTRAINT pk_artista;
       public            postgres    false    216            `           2606    16807    camisa pk_camisa 
   CONSTRAINT     T   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT pk_camisa PRIMARY KEY (idcamisa);
 :   ALTER TABLE ONLY public.camisa DROP CONSTRAINT pk_camisa;
       public            postgres    false    217            b           2606    16811    categoria pk_categoria 
   CONSTRAINT     ]   ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT pk_categoria PRIMARY KEY (idcategoria);
 @   ALTER TABLE ONLY public.categoria DROP CONSTRAINT pk_categoria;
       public            postgres    false    219            e           2606    16813    cliente pk_cliente 
   CONSTRAINT     S   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT pk_cliente PRIMARY KEY (email);
 <   ALTER TABLE ONLY public.cliente DROP CONSTRAINT pk_cliente;
       public            postgres    false    221            g           2606    16815    direccion pk_direccion 
   CONSTRAINT     ]   ALTER TABLE ONLY public.direccion
    ADD CONSTRAINT pk_direccion PRIMARY KEY (iddireccion);
 @   ALTER TABLE ONLY public.direccion DROP CONSTRAINT pk_direccion;
       public            postgres    false    222            k           2606    16817    estampado pk_estampado 
   CONSTRAINT     ]   ALTER TABLE ONLY public.estampado
    ADD CONSTRAINT pk_estampado PRIMARY KEY (idestampado);
 @   ALTER TABLE ONLY public.estampado DROP CONSTRAINT pk_estampado;
       public            postgres    false    224            o           2606    16819 *   estampado_categoria pk_estampado_categoria 
   CONSTRAINT     {   ALTER TABLE ONLY public.estampado_categoria
    ADD CONSTRAINT pk_estampado_categoria PRIMARY KEY (idestampado_categoria);
 T   ALTER TABLE ONLY public.estampado_categoria DROP CONSTRAINT pk_estampado_categoria;
       public            postgres    false    225            q           2606    16821    material pk_material 
   CONSTRAINT     Z   ALTER TABLE ONLY public.material
    ADD CONSTRAINT pk_material PRIMARY KEY (idmaterial);
 >   ALTER TABLE ONLY public.material DROP CONSTRAINT pk_material;
       public            postgres    false    228            s           2606    16823    pago pk_pago 
   CONSTRAINT     T   ALTER TABLE ONLY public.pago
    ADD CONSTRAINT pk_pago PRIMARY KEY (numerodepago);
 6   ALTER TABLE ONLY public.pago DROP CONSTRAINT pk_pago;
       public            postgres    false    230            w           2606    16825    pedido pk_pedido 
   CONSTRAINT     Z   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT pk_pedido PRIMARY KEY (numerodepedido);
 :   ALTER TABLE ONLY public.pedido DROP CONSTRAINT pk_pedido;
       public            postgres    false    232            y           2606    16827    tienda pk_tienda 
   CONSTRAINT     T   ALTER TABLE ONLY public.tienda
    ADD CONSTRAINT pk_tienda PRIMARY KEY (idtienda);
 :   ALTER TABLE ONLY public.tienda DROP CONSTRAINT pk_tienda;
       public            postgres    false    234            l           1259    16828     estampadocategoria_categoria_idx    INDEX     h   CREATE INDEX estampadocategoria_categoria_idx ON public.estampado_categoria USING btree (categoria_id);
 4   DROP INDEX public.estampadocategoria_categoria_idx;
       public            postgres    false    225            m           1259    16829     estampadocategoria_estampado_idx    INDEX     h   CREATE INDEX estampadocategoria_estampado_idx ON public.estampado_categoria USING btree (estampado_id);
 4   DROP INDEX public.estampadocategoria_estampado_idx;
       public            postgres    false    225            W           1259    16830    fk_administrador_tienda1_idx    INDEX     a   CREATE INDEX fk_administrador_tienda1_idx ON public.administrador USING btree (tienda_idtienda);
 0   DROP INDEX public.fk_administrador_tienda1_idx;
       public            postgres    false    215            \           1259    16832    fk_camisa_estampado1_idx    INDEX     \   CREATE INDEX fk_camisa_estampado1_idx ON public.camisa USING btree (estampado_idestampado);
 ,   DROP INDEX public.fk_camisa_estampado1_idx;
       public            postgres    false    217            ]           1259    16833    fk_camisa_material1_idx    INDEX     Y   CREATE INDEX fk_camisa_material1_idx ON public.camisa USING btree (material_idmaterial);
 +   DROP INDEX public.fk_camisa_material1_idx;
       public            postgres    false    217            ^           1259    16834    fk_camisa_tienda1_idx    INDEX     S   CREATE INDEX fk_camisa_tienda1_idx ON public.camisa USING btree (tienda_idtienda);
 )   DROP INDEX public.fk_camisa_tienda1_idx;
       public            postgres    false    217            c           1259    16836    fk_cliente_direccion1_idx    INDEX     ^   CREATE INDEX fk_cliente_direccion1_idx ON public.cliente USING btree (direccion_iddireccion);
 -   DROP INDEX public.fk_cliente_direccion1_idx;
       public            postgres    false    221            h           1259    16837    fk_estampado_artista1_idx    INDEX     X   CREATE INDEX fk_estampado_artista1_idx ON public.estampado USING btree (artista_email);
 -   DROP INDEX public.fk_estampado_artista1_idx;
       public            postgres    false    224            i           1259    16838    fk_estampado_tienda1_idx    INDEX     Y   CREATE INDEX fk_estampado_tienda1_idx ON public.estampado USING btree (tienda_idtienda);
 ,   DROP INDEX public.fk_estampado_tienda1_idx;
       public            postgres    false    224            t           1259    16840    fk_pedido_cliente1_idx    INDEX     R   CREATE INDEX fk_pedido_cliente1_idx ON public.pedido USING btree (cliente_email);
 *   DROP INDEX public.fk_pedido_cliente1_idx;
       public            postgres    false    232            u           1259    16841    fk_pedido_pago1_idx    INDEX     S   CREATE INDEX fk_pedido_pago1_idx ON public.pedido USING btree (pago_numerodepago);
 '   DROP INDEX public.fk_pedido_pago1_idx;
       public            postgres    false    232            �           2606    16842 0   estampado_categoria estampadocategoria_categoria    FK CONSTRAINT     �   ALTER TABLE ONLY public.estampado_categoria
    ADD CONSTRAINT estampadocategoria_categoria FOREIGN KEY (categoria_id) REFERENCES public.categoria(idcategoria);
 Z   ALTER TABLE ONLY public.estampado_categoria DROP CONSTRAINT estampadocategoria_categoria;
       public          postgres    false    225    4706    219            �           2606    16847 0   estampado_categoria estampadocategoria_estampado    FK CONSTRAINT     �   ALTER TABLE ONLY public.estampado_categoria
    ADD CONSTRAINT estampadocategoria_estampado FOREIGN KEY (estampado_id) REFERENCES public.estampado(idestampado);
 Z   ALTER TABLE ONLY public.estampado_categoria DROP CONSTRAINT estampadocategoria_estampado;
       public          postgres    false    4715    225    224            z           2606    16852 &   administrador fk_administrador_tienda1    FK CONSTRAINT     �   ALTER TABLE ONLY public.administrador
    ADD CONSTRAINT fk_administrador_tienda1 FOREIGN KEY (tienda_idtienda) REFERENCES public.tienda(idtienda);
 P   ALTER TABLE ONLY public.administrador DROP CONSTRAINT fk_administrador_tienda1;
       public          postgres    false    234    4729    215            {           2606    16862    camisa fk_camisa_estampado1    FK CONSTRAINT     �   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT fk_camisa_estampado1 FOREIGN KEY (estampado_idestampado) REFERENCES public.estampado(idestampado);
 E   ALTER TABLE ONLY public.camisa DROP CONSTRAINT fk_camisa_estampado1;
       public          postgres    false    224    4715    217            |           2606    16867    camisa fk_camisa_material1    FK CONSTRAINT     �   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT fk_camisa_material1 FOREIGN KEY (material_idmaterial) REFERENCES public.material(idmaterial);
 D   ALTER TABLE ONLY public.camisa DROP CONSTRAINT fk_camisa_material1;
       public          postgres    false    4721    228    217            }           2606    16872    camisa fk_camisa_tienda1    FK CONSTRAINT     �   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT fk_camisa_tienda1 FOREIGN KEY (tienda_idtienda) REFERENCES public.tienda(idtienda);
 B   ALTER TABLE ONLY public.camisa DROP CONSTRAINT fk_camisa_tienda1;
       public          postgres    false    217    4729    234            ~           2606    16882    cliente fk_cliente_direccion1    FK CONSTRAINT     �   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT fk_cliente_direccion1 FOREIGN KEY (direccion_iddireccion) REFERENCES public.direccion(iddireccion);
 G   ALTER TABLE ONLY public.cliente DROP CONSTRAINT fk_cliente_direccion1;
       public          postgres    false    4711    222    221                       2606    16887    estampado fk_estampado_artista1    FK CONSTRAINT     �   ALTER TABLE ONLY public.estampado
    ADD CONSTRAINT fk_estampado_artista1 FOREIGN KEY (artista_email) REFERENCES public.artista(email);
 I   ALTER TABLE ONLY public.estampado DROP CONSTRAINT fk_estampado_artista1;
       public          postgres    false    216    4699    224            �           2606    16892    estampado fk_estampado_tienda1    FK CONSTRAINT     �   ALTER TABLE ONLY public.estampado
    ADD CONSTRAINT fk_estampado_tienda1 FOREIGN KEY (tienda_idtienda) REFERENCES public.tienda(idtienda);
 H   ALTER TABLE ONLY public.estampado DROP CONSTRAINT fk_estampado_tienda1;
       public          postgres    false    4729    234    224            �           2606    16902    pedido fk_pedido_cliente1    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT fk_pedido_cliente1 FOREIGN KEY (cliente_email) REFERENCES public.cliente(email);
 C   ALTER TABLE ONLY public.pedido DROP CONSTRAINT fk_pedido_cliente1;
       public          postgres    false    221    4709    232            �           2606    16907    pedido fk_pedido_pago1    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT fk_pedido_pago1 FOREIGN KEY (pago_numerodepago) REFERENCES public.pago(numerodepago);
 @   ALTER TABLE ONLY public.pedido DROP CONSTRAINT fk_pedido_pago1;
       public          postgres    false    4723    232    230                  x������ � �         (   x���������鹉�9z�����F�&�1~\1z\\\ �|	�            x������ � �            x������ � �         R   x�KLLKL+NK���L,��s3s���s9��L�L�\���9%�y EP6�:C#cNC�l�D>H�7��.4&F��� �"N         4   x�3�L�/N�t�O�/I�t����M�L�444 "N�es�=... 9��            x������ � �            x������ � �      !      x������ � �      #   >   x�3�4204�50�542��3Ə�Y�&j�,j5��u�9�,,��f؅c���� ���      %   <   x�3�4�,HLOL��4204�50�54Afrf$�f���9��&f��%��r��+F��� J       '      x������ � �     