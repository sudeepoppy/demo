#	$NetBSD: Makefile.boot,v 1.21 2014/02/24 07:23:44 skrll Exp $
#
# a very simple makefile...
#
# You only want to use this if you aren't running NetBSD.
#
# modify MACHINE and MACHINE_ARCH as appropriate for your target architecture
#

.MAKEFLAGS: -m ${.CURDIR}/share/mk

CC=gcc -O -g

.c.o:
	${CC} ${CFLAGS} -c $< -o $@

# tested on HP-UX 10.20
#MAKE_MACHINE=hppa
#MAKE_MACHINE_ARCH=hppa
CFLAGS= -DTARGET_MACHINE=\"${MACHINE}\" \
	-DTARGET_MACHINE_ARCH=\"${MACHINE_ARCH}\" \
	-DMAKE_MACHINE=\"${MACHINE}\"
LIBS=

OBJ=*.o

bmake: ${OBJ}
#	@echo 'make of make and make.0 started.'
	${CC} ${CFLAGS} ${OBJ} -o bmake 
	@ls -l $@
#	nroff -h -man make.1 > make.0
#	@echo 'make of make and make.0 completed.'

clean:
	rm -f ${OBJ} ${LIBOBJ} ${PORTOBJ} bmake
