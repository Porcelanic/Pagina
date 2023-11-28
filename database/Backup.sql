PGDMP      8            
    {            DBFinal    16.0    16.0 B    5           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            6           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            7           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            8           1262    26858    DBFinal    DATABASE        CREATE DATABASE "DBFinal" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE "DBFinal";
                postgres    false            �            1259    26859    artista    TABLE     �   CREATE TABLE public.artista (
    nombre character varying(20) NOT NULL,
    email character varying(30) NOT NULL,
    password character varying(45) NOT NULL,
    trial438 character(1)
);
    DROP TABLE public.artista;
       public         heap    postgres    false            �            1259    26865    camisa    TABLE     p  CREATE TABLE public.camisa (
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
       public         heap    postgres    false            �            1259    26864    camisa_idcamisa_seq    SEQUENCE     �   CREATE SEQUENCE public.camisa_idcamisa_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.camisa_idcamisa_seq;
       public          postgres    false    217            9           0    0    camisa_idcamisa_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.camisa_idcamisa_seq OWNED BY public.camisa.idcamisa;
          public          postgres    false    216            �            1259    26876    cliente    TABLE     �   CREATE TABLE public.cliente (
    nombre character varying(45) NOT NULL,
    email character varying(45) NOT NULL,
    password character varying(45) NOT NULL,
    trial438 character(1)
);
    DROP TABLE public.cliente;
       public         heap    postgres    false            �            1259    26882 	   estampado    TABLE       CREATE TABLE public.estampado (
    idestampado integer NOT NULL,
    "diseño" text NOT NULL,
    nombre character varying(20) NOT NULL,
    categoria character varying(20) NOT NULL,
    artista_email character varying(30) NOT NULL,
    trial438 character(1)
);
    DROP TABLE public.estampado;
       public         heap    postgres    false            �            1259    26881    estampado_idestampado_seq    SEQUENCE     �   CREATE SEQUENCE public.estampado_idestampado_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.estampado_idestampado_seq;
       public          postgres    false    220            :           0    0    estampado_idestampado_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.estampado_idestampado_seq OWNED BY public.estampado.idestampado;
          public          postgres    false    219            �            1259    26892    informacion    TABLE     n  CREATE TABLE public.informacion (
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
       public         heap    postgres    false            �            1259    26891    informacion_idinformacion_seq    SEQUENCE     �   CREATE SEQUENCE public.informacion_idinformacion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.informacion_idinformacion_seq;
       public          postgres    false    222            ;           0    0    informacion_idinformacion_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.informacion_idinformacion_seq OWNED BY public.informacion.idinformacion;
          public          postgres    false    221            �            1259    26899    material    TABLE     �   CREATE TABLE public.material (
    idmaterial integer NOT NULL,
    nombre character varying(45) NOT NULL,
    cantidad integer NOT NULL,
    trial438 character(1)
);
    DROP TABLE public.material;
       public         heap    postgres    false            �            1259    26898    material_idmaterial_seq    SEQUENCE     �   CREATE SEQUENCE public.material_idmaterial_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.material_idmaterial_seq;
       public          postgres    false    224            <           0    0    material_idmaterial_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.material_idmaterial_seq OWNED BY public.material.idmaterial;
          public          postgres    false    223            �            1259    26906    pago    TABLE     �   CREATE TABLE public.pago (
    numerodepago integer NOT NULL,
    fechapago date NOT NULL,
    valor real NOT NULL,
    trial441 character(1)
);
    DROP TABLE public.pago;
       public         heap    postgres    false            �            1259    26905    pago_numerodepago_seq    SEQUENCE     �   CREATE SEQUENCE public.pago_numerodepago_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.pago_numerodepago_seq;
       public          postgres    false    226            =           0    0    pago_numerodepago_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.pago_numerodepago_seq OWNED BY public.pago.numerodepago;
          public          postgres    false    225            �            1259    26913    pedido    TABLE     O  CREATE TABLE public.pedido (
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
       public         heap    postgres    false            �            1259    26912    pedido_numerodepedido_seq    SEQUENCE     �   CREATE SEQUENCE public.pedido_numerodepedido_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.pedido_numerodepedido_seq;
       public          postgres    false    228            >           0    0    pedido_numerodepedido_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.pedido_numerodepedido_seq OWNED BY public.pedido.numerodepedido;
          public          postgres    false    227            r           2604    26868    camisa idcamisa    DEFAULT     r   ALTER TABLE ONLY public.camisa ALTER COLUMN idcamisa SET DEFAULT nextval('public.camisa_idcamisa_seq'::regclass);
 >   ALTER TABLE public.camisa ALTER COLUMN idcamisa DROP DEFAULT;
       public          postgres    false    217    216    217            s           2604    26885    estampado idestampado    DEFAULT     ~   ALTER TABLE ONLY public.estampado ALTER COLUMN idestampado SET DEFAULT nextval('public.estampado_idestampado_seq'::regclass);
 D   ALTER TABLE public.estampado ALTER COLUMN idestampado DROP DEFAULT;
       public          postgres    false    220    219    220            t           2604    26895    informacion idinformacion    DEFAULT     �   ALTER TABLE ONLY public.informacion ALTER COLUMN idinformacion SET DEFAULT nextval('public.informacion_idinformacion_seq'::regclass);
 H   ALTER TABLE public.informacion ALTER COLUMN idinformacion DROP DEFAULT;
       public          postgres    false    221    222    222            u           2604    26902    material idmaterial    DEFAULT     z   ALTER TABLE ONLY public.material ALTER COLUMN idmaterial SET DEFAULT nextval('public.material_idmaterial_seq'::regclass);
 B   ALTER TABLE public.material ALTER COLUMN idmaterial DROP DEFAULT;
       public          postgres    false    224    223    224            v           2604    26909    pago numerodepago    DEFAULT     v   ALTER TABLE ONLY public.pago ALTER COLUMN numerodepago SET DEFAULT nextval('public.pago_numerodepago_seq'::regclass);
 @   ALTER TABLE public.pago ALTER COLUMN numerodepago DROP DEFAULT;
       public          postgres    false    226    225    226            w           2604    26916    pedido numerodepedido    DEFAULT     ~   ALTER TABLE ONLY public.pedido ALTER COLUMN numerodepedido SET DEFAULT nextval('public.pedido_numerodepedido_seq'::regclass);
 D   ALTER TABLE public.pedido ALTER COLUMN numerodepedido DROP DEFAULT;
       public          postgres    false    227    228    228            %          0    26859    artista 
   TABLE DATA           D   COPY public.artista (nombre, email, password, trial438) FROM stdin;
    public          postgres    false    215   %O       '          0    26865    camisa 
   TABLE DATA           �   COPY public.camisa (idcamisa, imagen, precio, talla, color, cantidad, estampado_idestampado, material_idmaterial, pedido_numerodepedido, trial438) FROM stdin;
    public          postgres    false    217   [O       (          0    26876    cliente 
   TABLE DATA           D   COPY public.cliente (nombre, email, password, trial438) FROM stdin;
    public          postgres    false    218   xO       *          0    26882 	   estampado 
   TABLE DATA           g   COPY public.estampado (idestampado, "diseño", nombre, categoria, artista_email, trial438) FROM stdin;
    public          postgres    false    220   �O       ,          0    26892    informacion 
   TABLE DATA           w   COPY public.informacion (idinformacion, barrio, ciudad, pais, codigopostal, direccion, telefono, trial438) FROM stdin;
    public          postgres    false    222   hP       .          0    26899    material 
   TABLE DATA           J   COPY public.material (idmaterial, nombre, cantidad, trial438) FROM stdin;
    public          postgres    false    224   �P       0          0    26906    pago 
   TABLE DATA           H   COPY public.pago (numerodepago, fechapago, valor, trial441) FROM stdin;
    public          postgres    false    226   �P       2          0    26913    pedido 
   TABLE DATA           �   COPY public.pedido (numerodepedido, valor, estado, fechapedido, fechaenvio, pago_numerodepago, cliente_email, informacion_idinformacion, trial441) FROM stdin;
    public          postgres    false    228   �P       ?           0    0    camisa_idcamisa_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.camisa_idcamisa_seq', 18, true);
          public          postgres    false    216            @           0    0    estampado_idestampado_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.estampado_idestampado_seq', 6, true);
          public          postgres    false    219            A           0    0    informacion_idinformacion_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.informacion_idinformacion_seq', 10, true);
          public          postgres    false    221            B           0    0    material_idmaterial_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.material_idmaterial_seq', 1, false);
          public          postgres    false    223            C           0    0    pago_numerodepago_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.pago_numerodepago_seq', 11, true);
          public          postgres    false    225            D           0    0    pedido_numerodepedido_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.pedido_numerodepedido_seq', 11, true);
          public          postgres    false    227            y           2606    26863    artista pk_artista 
   CONSTRAINT     S   ALTER TABLE ONLY public.artista
    ADD CONSTRAINT pk_artista PRIMARY KEY (email);
 <   ALTER TABLE ONLY public.artista DROP CONSTRAINT pk_artista;
       public            postgres    false    215            ~           2606    26872    camisa pk_camisa 
   CONSTRAINT     T   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT pk_camisa PRIMARY KEY (idcamisa);
 :   ALTER TABLE ONLY public.camisa DROP CONSTRAINT pk_camisa;
       public            postgres    false    217            �           2606    26880    cliente pk_cliente 
   CONSTRAINT     S   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT pk_cliente PRIMARY KEY (email);
 <   ALTER TABLE ONLY public.cliente DROP CONSTRAINT pk_cliente;
       public            postgres    false    218            �           2606    26889    estampado pk_estampado 
   CONSTRAINT     ]   ALTER TABLE ONLY public.estampado
    ADD CONSTRAINT pk_estampado PRIMARY KEY (idestampado);
 @   ALTER TABLE ONLY public.estampado DROP CONSTRAINT pk_estampado;
       public            postgres    false    220            �           2606    26897    informacion pk_informacion 
   CONSTRAINT     c   ALTER TABLE ONLY public.informacion
    ADD CONSTRAINT pk_informacion PRIMARY KEY (idinformacion);
 D   ALTER TABLE ONLY public.informacion DROP CONSTRAINT pk_informacion;
       public            postgres    false    222            �           2606    26904    material pk_material 
   CONSTRAINT     Z   ALTER TABLE ONLY public.material
    ADD CONSTRAINT pk_material PRIMARY KEY (idmaterial);
 >   ALTER TABLE ONLY public.material DROP CONSTRAINT pk_material;
       public            postgres    false    224            �           2606    26911    pago pk_pago 
   CONSTRAINT     T   ALTER TABLE ONLY public.pago
    ADD CONSTRAINT pk_pago PRIMARY KEY (numerodepago);
 6   ALTER TABLE ONLY public.pago DROP CONSTRAINT pk_pago;
       public            postgres    false    226            �           2606    26918    pedido pk_pedido 
   CONSTRAINT     Z   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT pk_pedido PRIMARY KEY (numerodepedido);
 :   ALTER TABLE ONLY public.pedido DROP CONSTRAINT pk_pedido;
       public            postgres    false    228            z           1259    26873    fk_camisa_estampado1_idx    INDEX     \   CREATE INDEX fk_camisa_estampado1_idx ON public.camisa USING btree (estampado_idestampado);
 ,   DROP INDEX public.fk_camisa_estampado1_idx;
       public            postgres    false    217            {           1259    26874    fk_camisa_material1_idx    INDEX     Y   CREATE INDEX fk_camisa_material1_idx ON public.camisa USING btree (material_idmaterial);
 +   DROP INDEX public.fk_camisa_material1_idx;
       public            postgres    false    217            |           1259    26875    fk_camisa_pedido1_idx    INDEX     Y   CREATE INDEX fk_camisa_pedido1_idx ON public.camisa USING btree (pedido_numerodepedido);
 )   DROP INDEX public.fk_camisa_pedido1_idx;
       public            postgres    false    217            �           1259    26890    fk_estampado_artista1_idx    INDEX     X   CREATE INDEX fk_estampado_artista1_idx ON public.estampado USING btree (artista_email);
 -   DROP INDEX public.fk_estampado_artista1_idx;
       public            postgres    false    220            �           1259    26920    fk_pedido_cliente1_idx    INDEX     R   CREATE INDEX fk_pedido_cliente1_idx ON public.pedido USING btree (cliente_email);
 *   DROP INDEX public.fk_pedido_cliente1_idx;
       public            postgres    false    228            �           1259    26921    fk_pedido_informacion1_idx    INDEX     b   CREATE INDEX fk_pedido_informacion1_idx ON public.pedido USING btree (informacion_idinformacion);
 .   DROP INDEX public.fk_pedido_informacion1_idx;
       public            postgres    false    228            �           1259    26919    fk_pedido_pago1_idx    INDEX     S   CREATE INDEX fk_pedido_pago1_idx ON public.pedido USING btree (pago_numerodepago);
 '   DROP INDEX public.fk_pedido_pago1_idx;
       public            postgres    false    228            �           2606    26922    camisa fk_camisa_estampado1    FK CONSTRAINT     �   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT fk_camisa_estampado1 FOREIGN KEY (estampado_idestampado) REFERENCES public.estampado(idestampado);
 E   ALTER TABLE ONLY public.camisa DROP CONSTRAINT fk_camisa_estampado1;
       public          postgres    false    4739    217    220            �           2606    26927    camisa fk_camisa_material1    FK CONSTRAINT     �   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT fk_camisa_material1 FOREIGN KEY (material_idmaterial) REFERENCES public.material(idmaterial);
 D   ALTER TABLE ONLY public.camisa DROP CONSTRAINT fk_camisa_material1;
       public          postgres    false    217    4743    224            �           2606    26932    camisa fk_camisa_pedido1    FK CONSTRAINT     �   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT fk_camisa_pedido1 FOREIGN KEY (pedido_numerodepedido) REFERENCES public.pedido(numerodepedido);
 B   ALTER TABLE ONLY public.camisa DROP CONSTRAINT fk_camisa_pedido1;
       public          postgres    false    217    4750    228            �           2606    26937    estampado fk_estampado_artista1    FK CONSTRAINT     �   ALTER TABLE ONLY public.estampado
    ADD CONSTRAINT fk_estampado_artista1 FOREIGN KEY (artista_email) REFERENCES public.artista(email);
 I   ALTER TABLE ONLY public.estampado DROP CONSTRAINT fk_estampado_artista1;
       public          postgres    false    215    220    4729            �           2606    26942    pedido fk_pedido_cliente1    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT fk_pedido_cliente1 FOREIGN KEY (cliente_email) REFERENCES public.cliente(email);
 C   ALTER TABLE ONLY public.pedido DROP CONSTRAINT fk_pedido_cliente1;
       public          postgres    false    228    218    4736            �           2606    26947    pedido fk_pedido_informacion1    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT fk_pedido_informacion1 FOREIGN KEY (informacion_idinformacion) REFERENCES public.informacion(idinformacion);
 G   ALTER TABLE ONLY public.pedido DROP CONSTRAINT fk_pedido_informacion1;
       public          postgres    false    4741    222    228            �           2606    26952    pedido fk_pedido_pago1    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT fk_pedido_pago1 FOREIGN KEY (pago_numerodepago) REFERENCES public.pago(numerodepago);
 @   ALTER TABLE ONLY public.pedido DROP CONSTRAINT fk_pedido_pago1;
       public          postgres    false    228    4745    226            %   &   x��M�+M���S鹉�9z������1~\1z\\\ Х
D      '      x������ � �      (   &   x��M�+M���S鹉�9z������1~\1z\\\ Х
D      *   �   x��λ� �����rh��L�������SH
4��W����''��.��p�<�f���Y3U,n"t���| �J�|�,���%�+$�l$��\�`!��"%F�͔:�kz��-���Q�FYIVfcL�*(����69���*�ּ����ςR�j܇�      ,      x������ � �      .   9   x�3�t�I�O���45����2��I�K�r�8}2��C΀������"�H� ��      0      x������ � �      2      x������ � �     